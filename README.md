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

### sshShortcuts
If you have an identity file and device(username@ipAddr), if you provide a name, this script will generate 3 commands for you : cp2${NAME}, cpfrom${NAME}, and ${NAME}(passwordless ssh)

Example usage
```
  sshShortcuts -id_file id_rsa -device bitnami@10.0.0.2 -name webserver
```
This will generate the commands cp2webserver, cpfromwebserver and webserver
  - Requires nodejs to be installed

### ${NAME} || rd
ssh into a remote device. Requires some configuration

Example usage:
  ```
  rd
  ```
  - ssh into device using a id file. Get the id file and set ID_FILE in script to that file's location
  - set DEVICE to the device's username and ip addres e.g (pi@10.0.0.2)

### cp2${NAME} || cp2rd
scp  a local file to a remote device. Uses scp's r flag, which allows copying folders. Requires some configuration

Example usage (copy a picture to home directory):
  ```
  cp2rd profile-pic.jpg ~
  ```
  - Get id file for remote device and set PEM_FILE in script to that file's location
  - set DEVICE to the device's username and ip addres e.g (pi@10.0.0.2)

### cpfrom${NAME} || cpfromrd
scp a remote device's file to local machine. Uses scp's r flag, which allows copying folders. Requires some configuration

Example usage (copy bash config file to current directory:
  ```
  cpfromrd ~/.bashrc .\
  ```
  - Get id file for remote device and set ID_FILE in script to that file's location
  - set DEVICE to the device's username and ip addres e.g (pi@10.0.0.2)

