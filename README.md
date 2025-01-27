# Clash-code-files by Irene Gitau

## Description

## Languages used

## File Structure

`Code Golfing ` is a type of programming challenge aiming to shorten the length of a program. This often results in illegible code, but looking to save the most characters will get you to the core of your language and make you discover mechanisms that will help you better understand how it works under the hood. Some of the files in this repositor contain code golfing techniques.



Our application generates fixtures for a football league based on teams from different towns, ensuring that each team plays a home and away match against every other team from a different town. The fixtures are then randomized, and for every two matches, a "Weekend break" message is displayed.

## Features 

 - **Home and Away Fixtures**: Each team plays both home and away matches against others.
 - **Local Town-Based Filtering**: Teams from the same local town are not scheduled to play against each other.
 - **Randomized Fixture Order**: The order of fixtures is shuffled.
 - **Weekend Breaks**: A weekend break is displayed after every two matches for scheduling clarity.(4 teams play each weekend)


## Process of working
 1. **Input**: A list of teams, each with a name, town, and stadium.
 2. **Fixture Generation**: Matches are scheduled between teams from different towns.
 3. **Randomization**: The generated matches are shuffled.
 4. **Output**: The fixtures are printed, showing the home team, away team, and the home team's stadium. After every second match, a weekend break is displayed.

## Features
 **Reads and parses team data from a CSV file.**
 **Checks if the teams are correctly loaded.**
 **Generates match fixtures based on the input data.**
 **Randomizes and displays the match schedules.**
 **Organizes fixtures to include appropriate breaks between matches.**

## Requirements

 C++ compiler in our case CLion
 Standard libraries (for reading files, using vectors, etc.)