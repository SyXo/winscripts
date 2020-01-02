@echo off

rem league client file path
set leagueClient=C:\Riot Games\League of Legends\LeagueClient.exe
rem server ip address (currently using NA)
set ipAddr=104.160.131.3
rem number of times to ping server
set /A pingNum=5
rem the highest ping acceptable for play
set /A maxPing=100
rem make temp filename in current dir
set tempFile=%~dp0temp.txt

rem store ping result to temp file
ping %ipAddr% -n %pingNum% > %tempFile%
rem set last line of temp file to variable
set result=
for /f "delims=" %%i in ('type %tempFile%') do set result=%%i
rem remove tab space from result
set result=%result:    =%

rem result is formatted as something like:
rem Minimum = Xms, Maximum = Xms, Average = Xms
rem split at '=' and grab the fourth token to get avg ping
for /f "tokens=4 delims==" %%a in ("%result%") do (
  set result=%%a
)

rem ping has a space at its start remove this
set result=%result: =%
echo Average ping: %result% 

rem msg user about ping
set pingMsg=Decent ping:%result%. Starting league...
rem remove ms from string and if its higher than 100, dont start client
if %result:ms=% GTR %maxPing% (
	rem change ping message
	set pingMsg=High ping:%result%. May not want to play
)else (
	rem start League client
	start "" "%leagueClient%"
)
rem msg user with ping results and exit
msg %username% %pingMsg%

rem delete tempfile and suppress output
del  /q %tempFile% > nul
