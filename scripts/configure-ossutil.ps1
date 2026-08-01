$ErrorActionPreference = 'Stop'

$exe = Join-Path $env:LOCALAPPDATA 'ossutil\1.7.19\ossutil-v1.7.19-windows-amd64\ossutil.exe'
if (-not (Test-Path $exe)) {
  Write-Host 'ossutil not found.'
  Read-Host 'Press Enter to exit'
  exit 1
}

$cfg = Join-Path $env:USERPROFILE '.ossutilconfig'

Write-Host '=== ossutil configuration ==='
Write-Host ''
Write-Host "Config file: $cfg"
Write-Host ''

$endpoint = Read-Host 'Endpoint (e.g. oss-cn-wuhan-lr.aliyuncs.com)'
$id = Read-Host 'AccessKey ID'
$secret = Read-Host 'AccessKey Secret'

if (-not $endpoint -or -not $id -or -not $secret) {
  Write-Host 'Endpoint, AccessKey ID and AccessKey Secret are all required.'
  Read-Host 'Press Enter to exit'
  exit 1
}

& $exe config -e $endpoint -i $id -k $secret -c $cfg
if ($LASTEXITCODE -ne 0) {
  Write-Host 'ossutil config failed.'
  Read-Host 'Press Enter to exit'
  exit 1
}

Write-Host ''
Write-Host "Configuration saved to $cfg"
Read-Host 'Press Enter to close this window'
