@echo off
set PEM_FILE=''
set DEVICE=''
scp -i %PEM_FILE% -r %1 %DEVICE%:%2