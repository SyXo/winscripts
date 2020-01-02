@echo off
set dir=%*
if exist "%dir%" (
	cd /d "%dir%"
	subl ./
) else (
	echo Dir doesn't exist
	exit /b 10
)
exit /b