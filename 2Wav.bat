@echo off

set fileName=%*
for /f "tokens=2 delims=." %%a in ("%fileName%") do (
  set ext=%%a
  )
call set wavFileName=%%fileName:.%ext%=.wav%%
echo %wavFileName%
ffmpeg -i "%fileName%" "%wavFileName%"