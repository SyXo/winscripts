@echo off
set ID_FILE=''
set DEVICE=''
scp -i %PEM_FILE% -r %DEVICE%:%1 %2