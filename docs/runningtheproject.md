# Running the Project
This page will detail how to get the Powered by Heresy code and project running on your computer. This will allow you to make changes to the game, its text, its formatting, its styling, or its code, and see the compiled results.

## Install NodeJS
You can [download NodeJS here](https://nodejs.org/en/download/).

## Set Up Git
Use the [GitHub article here](https://help.github.com/articles/set-up-git/) to set up git.

## Clone the Git Repo
Clone this git repo somewhere on your computer by in the command line going to `C:/WhereYouWantPutTheProject` and doing `git clone git@github.com:Vindexus/PoweredByHeresy .`

## NPM Install
You'll need to run `npm install` in the two compiler folders to download the dependencies they run on.

 - In the command line go to `C:/WhereYouPutTheProject/compiles/data` and run `npm install`
 - In the command line go to `C:/WhereYouPutTheProject/compiles/pages` and run `npm install`

## Run the Watch Commands
The project requires two NodeJS instances to be running. The first compiles game data into a `game_data.json` file. The second compiles pages and said data into multiple output files.

Game data: In the command line go to `C:/WhereYouPutTheProject/compiles/data` and run `npm run watch`  
Pages: In the command line go to `C:/WhereYouPutTheProject/compiles/data` and run `npm run watch`

## Make Some Changes
Try changing the wording in one of the pages, or changing the name of one of the moves.

## View the Results
You can open the HTML files directly in your browser for easy viewing. Open up Chrome or Firefox and hit Ctrl+O. Go to `C:/WhereYouPutTheProject/game/html` and open a page you want to see.
