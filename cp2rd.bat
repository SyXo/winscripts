@echo off
set ID_FILE=''
set DEVICE=''
scp -i %ID_FILE% -r %1 %DEVICE%:%2