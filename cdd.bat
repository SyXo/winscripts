@echo off
set dir=%*
if exist "%dir%" (
	cd /d "%dir%"
) else (
	echo Dir doesn't exist
	rem exit /b 10
)
rem exit /b