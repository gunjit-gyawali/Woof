**Woof – Dog Guesser (Browser Extension)**

Woof is an interactive browser extension that guesses your dog’s breed based on a fun quiz. By answering questions about your dog’s size, coat, behavior, and personality traits, the extension calculates the most likely breed and shows additional possible matches directly from your browser toolbar.

**Demo**
You can use the web version live at https://gunjit-gyawali.github.io/Woof/

**Features**
Interactive quiz with 15 questions covering physical traits and behavior.
Real-time progress bar showing quiz completion.
Breed matching algorithm calculates top 3 probable breeds.
Displays breed description, traits, and alternatives.
Clean and responsive popup design.
Ability to restart the quiz without refreshing.

**Technologies Used**
HTML5 – Structure of the extension popup.
CSS – Responsive styling and animations.
JavaScript – Handles quiz logic, scoring, and result display.
Chrome Extension (Manifest V3) – Extension configuration and deployment.

**How It Works**
The user opens the extension and enters their dog's name.
Each question is displayed with multiple-choice options inside the popup.
The user selects answers, which are stored in an answers object.
After all questions are answered, the extension calculates a matching score for each breed based on shared traits.

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
├─ manifest.json
├─ index.html
├─ styles.css
├─ script.js
└─ README.md

**Usage**
Clone or download the repository.
Open chrome://extensions/ in your browser.
Enable Developer Mode.
Click “Load unpacked” and select the extension folder.
Click the extension icon in the toolbar.
Enter your dog’s name.
Answer all the quiz questions honestly.
View the predicted breed and alternative matches.
Click “Take Quiz Again” to restart.

**Customization**
Add more dog breeds to the breeds object in popup.js.
Adjust or add quiz questions in the questions array.
Modify colors and animations in popup.css to match your theme.

**License**
This project is open-source and available for personal and educational use.