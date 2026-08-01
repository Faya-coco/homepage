param(
  [string]$Bucket = $env:OSS_BUCKET,
  [string]$Endpoint = $env:OSS_ENDPOINT
)

$ErrorActionPreference = 'Stop'

if (-not $Bucket -or -not $Endpoint) {
  Write-Host 'Usage: .\scripts\deploy-oss.ps1 -Bucket <bucket-name> -Endpoint <oss-endpoint>'
  Write-Host 'Example: .\scripts\deploy-oss.ps1 -Bucket faya-homepage -Endpoint oss-cn-hangzhou.aliyuncs.com'
  exit 1
}

$ossutilCommand = Get-Command ossutil -ErrorAction SilentlyContinue
$ossutilLocal = Join-Path $env:LOCALAPPDATA 'ossutil\1.7.19\ossutil-v1.7.19-windows-amd64\ossutil.exe'
$ossutilExe = $null
if ($ossutilCommand) {
  $ossutilExe = $ossutilCommand.Source
}
elseif (Test-Path $ossutilLocal) {
  $ossutilExe = $ossutilLocal
}

if (-not $ossutilExe) {
  Write-Error 'ossutil not found. Install it first, then run ossutil config.'
  exit 1
}

$websiteXml = $null
Push-Location (Join-Path $PSScriptRoot '..')
try {
  $websiteXml = Join-Path $env:TEMP "oss-website-$PID.xml"
  $websiteXmlContent = @"
<?xml version="1.0" encoding="UTF-8"?>
<WebsiteConfiguration>
  <IndexDocument>
    <Suffix>index.html</Suffix>
  </IndexDocument>
  <ErrorDocument>
    <Key>index.html</Key>
  </ErrorDocument>
</WebsiteConfiguration>
"@
  [System.IO.File]::WriteAllText($websiteXml, $websiteXmlContent, (New-Object System.Text.UTF8Encoding($false)))

  Write-Host '1/4 Building production bundle...'
  & npm.cmd run build
  if ($LASTEXITCODE -ne 0) {
    throw 'npm run build failed'
  }

  Write-Host '2/4 Syncing dist to OSS...'
  & $ossutilExe sync './dist/' "oss://$Bucket/" --update --delete -f
  if ($LASTEXITCODE -ne 0) {
    throw 'ossutil sync failed'
  }

  Write-Host '3/4 Setting bucket ACL to public-read...'
  & $ossutilExe set-acl "oss://$Bucket/" public-read -b
  if ($LASTEXITCODE -ne 0) {
    throw 'Setting bucket ACL failed'
  }

  Write-Host '4/4 Enabling static website hosting...'
  & $ossutilExe website --method put "oss://$Bucket/" $websiteXml
  if ($LASTEXITCODE -ne 0) {
    throw 'Enabling static website hosting failed'
  }

  Write-Host "Deployed. Visit: https://$Bucket.$Endpoint/"
}
finally {
  if ($websiteXml -and (Test-Path $websiteXml)) {
    Remove-Item -LiteralPath $websiteXml -Force
  }
  Pop-Location
}
