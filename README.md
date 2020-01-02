# Window Helper Scripts
After repeatedly using the command prompt there were somethings I notice I was repeatedly doing, leading to the creation of a directory of shortcuts for doing these things. Some of these scripts depend on Windows Subsystem for Linux to work.
## Setup
1. Enable WSL. The easiest way to do this is to open a PowerShell as an admin and run 
     ```
      Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
     ```
2. Reboot
3. Download Ubuntu 18.04 from the App store and follow installation instructions. When complete update and upgrade apt packages if needed
4. Add this directory to PATH
___
## Scripts
### cdd
Change directory with the \d switch. If you are working with external drives, then this shortcut is helpful.
Example usage:
  ```
  cdd F:\other\drive
  ```
### cdsubl
Change into directory (using the \d switch) and then opens it in Sublime Text. 
Example usage:
  ```
  cdsubl F:\other\drive\project
  ```
  - Requires Sublime Text
  - Sublime Text must be added to PATH
### droidPhone
Shortcut for opening an Android Emulated device
  - Requires Android sdk tools to be installed
  - An environment variable named ANDROID_HOME that points to the sdk folder
  - Replacing  Nexus_5X_API_29_x86 in script with the emulated device name. Find emulated device name by running:
    ```
    %ANDROID_HOME%\emulator\emulator -list-avds
    ```
  Example usage:
  ```
  droidphone
  ```
### runAndroid
Shortcut for starting react native on android device
  - Requires nodejs
  - Needs react native globally installed (Run `npm i -g react-native`)
Example usage:
  ```
  runandroid
  ```
### lolping
 - Pings League of Legends server and if the ping isn't too bad, opens league. For more configuration options see [this](https://github.com/phantom-factotum/lolping).
 Example usage:
  ```
  lolping
  ```
### 2png
Convert Image to png e.g. and save the image in the same directory as the original file.
Example usage:
  ```
  2png profile-pic.jpg
  ```
  - Uses WSL
  - Additional requirements: inkscape (run `sudo apt install -y inkscape` to install on Ubuntu)
### 2wav
Convert audio file to wav e.g. and save the audio in the same directory as the original file.
Example usage:
  ```
  2wav song.mp3
  ``` 
  - Install ffmpeg from [here](https://www.ffmpeg.org/download.html#build-windows) (I can't remember why, but I went through the trouble of manually downloading the windows version rather than just using `wsl sudo apt install -y ffmpeg`. Maybe I was having some unique bug or something?)
  - Extract folder and add folder to PATH
