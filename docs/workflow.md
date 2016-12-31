# Workflow
This document will describe the technical process that combines `game data` with `pages` to produce the human-readable pages of the game.

    -------------------------------------------------------
    | GAME DATA FILES                                     |
    | Files that describe reusable parts of the game.     |
    | Ex: moves, stats, equipment, tags, enemies, classes |
    -------------------------------------------------------
               ||
               || read
               \/
    -----------------------------------------------------
    | DATA COMPILER                                     |
    | A NodeJS app that takes all the game data files   |
    | and saves it to a single JSON file                |
    -----------------------------------------------------         
               ||
               || write               
               \/                      
    --------------------------    ------------------------------------------------------------
    | JSON FILE              |    | PAGES                                                    |
    | Contains all game data.|    | XML files that contain game text and reference game data.|
    -------------------------     | Ex: character creation, introduction, GM section         |
               ||                 ------------------------------------------------------------
               ||                       ||
               || read                  || read
               \/                       \/
    -----------------------------------------------------
    | PAGE COMPILER                                     |
    | Several compilers that take in page files and     |
    | insert the game data and output readable files.   |
    -----------------------------------------------------
        ||                ||                 ||
        || write          || write           || write
        \/                \/                 \/
    ------------   -----------------  ----------------
    |MARKDOWN  |   | HTML          |  | XML          |
    |For GitHub|   | For a website |  | For InDesign |
    ------------   -----------------  ----------------
    
