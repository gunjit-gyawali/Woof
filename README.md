***Woof – Dog Guesser***

Woof is an interactive web application that guesses your dog’s breed based on a fun quiz. By answering questions about your dog’s size, coat, behavior, and personality traits, the app calculates the most likely breed and shows additional possible matches.

**Demo** - 
You can use it live at  **https://gunjit-gyawali.github.io/Woof/**

**Features**

Interactive quiz with 15 questions covering physical traits and behavior.
Real-time progress bar showing quiz completion.
Breed matching algorithm calculates top 3 probable breeds.
Displays breed description, traits, and alternatives.
Mobile-friendly and responsive design.
Ability to restart the quiz without refreshing the page.

**Technologies Used**

HTML5 – Structure of the quiz pages.
CSS – Modern responsive styling with animations.
JavaScript – Handles quiz logic, scoring, and result display.

**How It Works**

The user enters their dog's name and starts the quiz.
Each question is displayed with multiple-choice options.
The user selects answers, which are stored in an answers object.
After all questions are answered, the app calculates a matching score for each breed based on shared traits.

The top match is displayed with:
Dog’s name
Breed name
Confidence percentage
Description and key traits
The next two probable breeds are displayed as alternatives.
Users can restart the quiz to try again.

**File Structure**

/Woof
│
├─ index.html       # Main HTML file
├─ styles.css       # CSS styling for the app
├─ script.js        # JavaScript logic for quiz and results
└─ README.md        # Project documentation

**Usage**

Clone or download the repository.
Open index.html in a web browser.
Enter your dog’s name.
Answer all the quiz questions honestly.
View the predicted breed and alternative matches.
Click “Take Quiz Again” to restart.

**Customization**

Add more dog breeds to the breeds object in script.js.
Adjust or add quiz questions in the questions array.
Modify colors and animations in styles.css to match your theme.

**Credits**

Inspired by online breed quizzes.
Created as a fun pet project using vanilla HTML, CSS, and JavaScript.

**License**

This project is open-source and available for personal and educational use.
