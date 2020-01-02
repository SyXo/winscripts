@echo off
set fileName=%*
for /f "tokens=2 delims=." %%a in ("%fileName%") do (
  set ext=%%a
  )
call set pngFileName=%%fileName:.%ext%=.png%%
echo %pngFileName%
wsl  inkscape -z -e %pngFileName% -w 500 -h 500 %fileName%