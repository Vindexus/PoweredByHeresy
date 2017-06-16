# About this Project
These are the documents for those interested in helping with writing the game and its codebase.

## How It Works
The game is a combination of game text and NodeJS code. Game text is written in several locations, then run through compilers, and outputs readable files.

Read the [full details here](https://vindexus.github.io/PoweredByHeresy/workflow).

## How To Help

### 1. Making Small Changes
You can make small text changes directly on GitHub by editing files in the [source folder](https://github.com/Vindexus/PoweredByHeresy/tree/master/source). Here's what's in there

 - [Pages](https://github.com/Vindexus/PoweredByHeresy/tree/master/source/pages): Game text is in these pages, and they reference game data.
 - [Data](https://github.com/Vindexus/PoweredByHeresy/tree/master/source/data): Little pieces of game data, like moves and items, are stored here to be inserted into the pages.
 - [Partials](https://github.com/Vindexus/PoweredByHeresy/tree/master/source/partials): Small templates for things in pages that crop up a lot, like moves.
 
#### 1.1 Previewing Changes
If you'd like to preview the changes you make you'll need to [run the project locally](https://vindexus.github.io/PoweredByHeresy/runningtheproject) so you can see what the compilers output.

### 2. Making Large Text Changes
If you want to make large changes, you'll probably need to get the entire project with its code up and running locally.

Read [how to set up the project here](https://vindexus.github.io/PoweredByHeresy/runningtheproject).

### 3. Making Code Changes
The project uses two generic compilers I've written:

 - [rpgparser-data](https://github.com/Vindexus/rpgparser-data): A compiler for combining game pieces into a single game_data.json file.
  - The specific implementation of this compiler for Powered by Heresy is [here on GitHub](https://github.com/Vindexus/PoweredByHeresy/blob/master/compilers/data/index.js).
 - [rpgparser-pages](https://github.com/Vindexus/rpgparser-pages): A compiler that takes game text in XML files and inserts game data from the game_data.json into them.
  - Powered by Heresy has four specific page compilers you can find [here on GitHub](https://github.com/Vindexus/PoweredByHeresy/tree/master/compilers/pages) that add custom functions specific to this project.
  
### 4. Making Website Changes
A very simple ExpressJS website has been created in [the website folder](https://github.com/Vindexus/PoweredByHeresy/tree/master/website) of the project. The `website` compiler creates the views that the website loads.

