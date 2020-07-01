# Computing 2 Submission Proforma

**CID:** [01772891]

For each section, write a maximum of 200 words.

## Brief
*State what you set out to acomplish with this web app.*
The app is a card matching game that not only tests your memory but also improves your general knowledge. The overall theme is travelling, and users are expected to match a country landmark to their flag. I thought this theme would be suitable now, since most people are missing their summer vacations due to covid-19. I initially hoped to create more modes for the game where users could pick if they wanted to "explore" a different continent. For now, it is just Asia as I had not enough time. I wanted this to be a relaxing game where users could take their time to figure out which flag belongs to which country, hence I decided to use "number of flips" instead of "time taken to complete game" as the score benchmark. In terms of appearance, the goal was to look professional and uniform.

## Coding
*Highlight your approach to coding in this project.*
Being a novice coder, my main goal was just for the game to run smoothly. Functional programming was incorporated wherever I knew how to. Async functions were used whenever appropriate. 

## UX/UI
*Outline the key elements of your UX/UI design.*
All items that can be clicked on (buttons, links, cards) had special effects to act as a signifier, such as having a pointer cursor and enlarging when hovered over. It was ensured that the app would still be functional when the browser size was at 50% or even zoomed in.Input from users could be submitted with the enter key, making it more intuitive than clicking on the submit button with a mouse. At normal browser size, all cards were made to fit into the current view, as scrolling up and down to click on other cards would make the game frustrating. 

## Data
*Explain how you structure and process your data.*
At the end of the game, users are prompted to enter their name so that their scores can be recorded in the scoreboard. I used NeDB (Their API is a subset of MongoDB's) to create a database for the scores. Users are able to view the scoreboard as well.

## Debugging
*Describe how you used debugging practices and tools and how they helped you overcome a bug or conceptual issue.*
The game was played numerous times by myself to ensure that it always perform as expected.


## Best Practice
*Outline your use of software development best practices*
I cleaned up my code such that it passes JSLint. Comments were added in the code where appropriate, while functions and variables were named suitably so as to not confuse readers. HTML, CSS and JS files were separated.

For the app to be more accessible, test were run with AXE and their suggestions followed, such as making the contrast of colours higher and ensuring that the app is keyboard friendly. Red boxes signified where the focus is on when users had to navigate only with their keyboard. Alt attributes were added to all images for users who can't see the pictures. I also included my email at the footer to allow users to provide feedback, which was suggested in one of the web accessibility videos.