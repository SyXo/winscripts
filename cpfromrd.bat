@echo off
set PEM_FILE=''
set DEVICE=''
scp -i %PEM_FILE% -r %DEVICE%:%1 %2