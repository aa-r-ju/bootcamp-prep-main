## How to set up your computer for the work

### Installations

- Install VSCode (if not installed)
  - go to https://code.visualstudio.com/download and download and install the version for your operating system
- Install Node (if not installed)
  - on your VSCode, open the terminal
  - on the terminal, type the following command:
    ```
    node —-version
    ```
    if it shows some version number like below:
    ```
    v20.19.3
    ```
    Then node is installed. else
  - go to https://nodejs.org/en/download/ and download and install the version for your operating system
- Install git (if not available)
  - on the terminal, type the following command:
    ```
    git —-version
    ```
    if it shows some version number like below:
    ```
    git version 2.50.0
    ```
    Then git is installed. else go to https://git-scm.com/downloads and download and install the version for your operating system

### Getting our code for the Bootcamp Prep lessons

1. Download the file bootcamp-prep-main.zip from https://drive.google.com/file/d/1aTRju9pGEivcfXxerD-RFXN_1DkdjZpa/view?usp=sharing

- Unzip bootcamp-prep-main.zip
- Open the folder bootcamp-prep-main in VSCode

### Working with git

- Lets create a git repository
  - Open terminal from VSCode
  - make sure you are in the 'bootcamp-prep-main' folder from the terminal, then type the following command
    ```
    git init
    ```
    This will initialize a new git repository
- Lets commit our files into our newly created git repository
  - On the sidebar of your VSCode, go to the git view
  - Then in the message box, lets type the message for our first commit
    ```
    first commit
    ```
    Then click on the check mark that appears just above the message box.
  - you have just completed your first commit!

### Lets run a node project

- In the terminal, lets go to bootcamp-prep-main/pre-work-workshops/03-expressions-variables-and-tdd
  - first, open the terminal. you will most likely be in the root folder of your repository (bootcamp-prep-main)
  - then run the following command
    ```
    cd pre-work-workshops/03-expressions-variables-and-tdd
    ```
    which will change directory (cd) to where we want to go, pre-work-workshops/03-expressions-variables-and-tdd in our case
  - Now, lets install the node project (if not installed yet), by running the following command in the terminal
    ```
    npm install
    ```
    This command will look into the package.json file in this folder, and install all the libraries it sees inside the 'dependencies' key. in our case, it is the 'testem' library. It will install all these node libraries into the 'node_modules' directory that you will see has been created inside our current directory

### A git side note

- at this point, if you now go to the git View (the 3 dots on the side of VSCode), you will see that ALL the 1k+ files from the 'node_modules' directory now appear as new files to be committed into our git repository. Since these files are not our code, and since we can always get them by running 'npm install', we do not need to commit these files into our git repository. To exclude any folder or files from our repository
  - we have create a file with the name '.gitignore' in our root project folder (in bootcamp-prep-main)
  - then inside .gitnore file, which is empty right now, add the name of the file or folder you want git to ignore. In our case
    ```
    node_modules
    ```
  - now, as soon as you save the .gitignore file, you will see that your git view no longer shows any of the files inside node_modules
  - add this point, lets create another git commit with the message 'add gitignore'

### Lets run our node project

- open the VSCode terminal and go to the directory 'bootcamp-prep-main/pre-work-workshops/03-expressions-variables-and-tdd'
- then run the following command in the terminal
  ```
  npm run test
  ```
  when you type anything after `npm run` in the command line, then it will run that specific command as mentioned under the 'scripts' key in the package.json file. so in our case, it will run 'testem', because we ran the 'test' command
- this command will now run our testem environment in the browser at the url http://localhost:7357/. so lets open that url
- now, in VSCode, open the file bootcamp-prep-main/pre-work-workshops/03-expressions-variables-and-tdd/01-favorite-activity/favorite-activity.spec.js
  - you will see that this specific test case is looking for the variable 'favoriteActivity' to have the value 'coding'. it is looking for this value in any javascript files inside this directory, which in our case is the only other file 'favorite-activity.js'
  - so lets open favorite-activity.js, and add the following line of code
    ```
    let favoriteActivity='coding'
    ```
    when you save this file, you will see in the testem frontend at http://localhost:7357/ that one test case has passed out of the 9 test cases.
  - lets commit our repository up to this point with the comment 'solve favorite activity'

## Lets put our repository it GitHub

- GitHub
  - Create repo in your space
    - bootcamp-prep-main

### Extensions for VSCode

- Prettier extension on VSCode
- Create .prettierrc in root directory
  - {}
- Settings (Ctrl ,)
- Format on save -> set it on
- require config prettier -> set it on
- esLint > install extension
- Live server

### Terminal commands to know:

- cd, ls, pwd
- npm install
- npm run some command
