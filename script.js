let dogName = '';
let currentQuestion = 0;
let answers = {};

const questions = [
    {
        id: 'size',
        question: 'How big is your dog?',
        options: [
            { text: 'Small (under 20 lbs)', value: 'small', traits: { size: 'small' } },
            { text: 'Medium (20-50 lbs)', value: 'medium', traits: { size: 'medium' } },
            { text: 'Large (50-90 lbs)', value: 'large', traits: { size: 'large' } },
            { text: 'Giant (over 90 lbs)', value: 'giant', traits: { size: 'giant' } }
        ]
    },
    {
        id: 'body_build',
        question: 'How would you describe your dog\'s body build?',
        options: [
            { text: 'Compact and muscular', value: 'muscular', traits: { build: 'muscular' } },
            { text: 'Lean and athletic', value: 'athletic', traits: { build: 'athletic' } },
            { text: 'Sturdy and stocky', value: 'stocky', traits: { build: 'stocky' } },
            { text: 'Long and low (short legs)', value: 'long_low', traits: { build: 'long_low' } }
        ]
    },
    {
        id: 'coat_length',
        question: 'What type of coat does your dog have?',
        options: [
            { text: 'Short and smooth', value: 'short', traits: { coat: 'short' } },
            { text: 'Medium length', value: 'medium', traits: { coat: 'medium' } },
            { text: 'Long and fluffy', value: 'long', traits: { coat: 'long' } },
            { text: 'Curly or wiry', value: 'curly', traits: { coat: 'curly' } }
        ]
    },
    {
        id: 'coat_color',
        question: 'What color is your dog primarily?',
        options: [
            { text: 'Black or dark brown', value: 'dark', traits: { color: 'dark' } },
            { text: 'Golden, tan, or brown', value: 'golden', traits: { color: 'golden' } },
            { text: 'White or cream', value: 'light', traits: { color: 'light' } },
            { text: 'Multi-colored or spotted', value: 'multi', traits: { color: 'multi' } }
        ]
    },
    {
        id: 'muzzle',
        question: 'What does your dog\'s face look like?',
        options: [
            { text: 'Long snout/muzzle', value: 'long', traits: { muzzle: 'long' } },
            { text: 'Medium-length snout', value: 'medium', traits: { muzzle: 'medium' } },
            { text: 'Short/pushed-in face (flat)', value: 'flat', traits: { muzzle: 'flat' } },
            { text: 'Square or broad muzzle', value: 'square', traits: { muzzle: 'square' } }
        ]
    },
        {
        id: 'ears',
        question: 'Describe your dog\'s ears:',
        options: [
            { text: 'Floppy and long', value: 'floppy', traits: { ears: 'floppy' } },
            { text: 'Pointed and upright', value: 'pointed', traits: { ears: 'pointed' } },
            { text: 'Semi-erect (fold over)', value: 'semi', traits: { ears: 'semi' } },
            { text: 'Small and close to head', value: 'small', traits: { ears: 'small' } }
    ]
    },
    {
        id: 'energy',
        question: 'What\'s your dog\'s energy level?',
        options: [
            { text: 'Low - prefers lounging', value: 'low', traits: { energy: 'low' } },
            { text: 'Moderate - balanced activity', value: 'moderate', traits: { energy: 'moderate' } },
            { text: 'High - always ready to play', value: 'high', traits: { energy: 'high' } },
            { text: 'Very high - never stops moving', value: 'very_high', traits: { energy: 'very_high' } }
        ]
    },
    {
        id: 'exercise',
        question: 'How much exercise does your dog need?',
        options: [
            { text: 'Minimal - short walks are enough', value: 'minimal', traits: { exercise: 'low' } },
            { text: 'Moderate - daily walks', value: 'moderate', traits: { exercise: 'moderate' } },
            { text: 'High - needs lots of activity', value: 'high', traits: { exercise: 'high' } },
            { text: 'Very high - athletic and tireless', value: 'very_high', traits: { exercise: 'very_high' } }
        ]
    },
    {
        id: 'barking',
        question: 'How much does your dog bark?',
        options: [
            { text: 'Rarely or never', value: 'quiet', traits: { vocal: 'quiet' } },
            { text: 'Occasionally', value: 'moderate', traits: { vocal: 'moderate' } },
            { text: 'Frequently - alert barker', value: 'frequent', traits: { vocal: 'frequent' } },
            { text: 'Very vocal - loves to "talk"', value: 'very_vocal', traits: { vocal: 'very_vocal' } }
        ]
    },
    {
        id: 'strangers',
        question: 'How does your dog react to strangers?',
        options: [
            { text: 'Super friendly - loves everyone', value: 'friendly', traits: { social: 'friendly' } },
            { text: 'Cautious but warms up', value: 'cautious', traits: { social: 'cautious' } },
            { text: 'Reserved or aloof', value: 'reserved', traits: { social: 'reserved' } },
            { text: 'Protective or territorial', value: 'protective', traits: { social: 'protective' } }
        ]
    },
    {
        id: 'kids_pets',
        question: 'How is your dog with kids and other pets?',
        options: [
            { text: 'Excellent - very gentle and patient', value: 'excellent', traits: { family_friendly: 'excellent' } },
            { text: 'Good - does well with supervision', value: 'good', traits: { family_friendly: 'good' } },
            { text: 'Okay - can be selective', value: 'okay', traits: { family_friendly: 'okay' } },
            { text: 'Better as only pet/with adults', value: 'limited', traits: { family_friendly: 'limited' } }
        ]
    },
    {
        id: 'intelligence',
        question: 'How easy is your dog to train?',
        options: [
            { text: 'Very easy - learns instantly', value: 'very_easy', traits: { trainability: 'high' } },
            { text: 'Pretty easy - quick learner', value: 'easy', traits: { trainability: 'high' } },
            { text: 'Moderate - needs patience', value: 'moderate', traits: { trainability: 'moderate' } },
            { text: 'Challenging - independent thinker', value: 'challenging', traits: { trainability: 'low' } }
        ]
    },
    {
        id: 'prey_drive',
        question: 'Does your dog chase small animals or moving things?',
        options: [
            { text: 'Never - totally calm around critters', value: 'none', traits: { prey_drive: 'low' } },
            { text: 'Occasionally - mild interest', value: 'low', traits: { prey_drive: 'low' } },
            { text: 'Often - gets excited by movement', value: 'moderate', traits: { prey_drive: 'moderate' } },
            { text: 'Always - intense chase instinct', value: 'high', traits: { prey_drive: 'high' } }
        ]
    },
    {
        id: 'behavior',
        question: 'What behavior best describes your dog?',
        options: [
            { text: 'Herding - likes to keep everyone together', value: 'herding', traits: { behavior: 'herding' } },
            { text: 'Hunting - loves chasing things', value: 'hunting', traits: { behavior: 'hunting' } },
            { text: 'Guarding - protective of home', value: 'guarding', traits: { behavior: 'guarding' } },
            { text: 'Companion - just wants to be with you', value: 'companion', traits: { behavior: 'companion' } }
        ]
    },
    {
        id: 'affection',
        question: 'How affectionate is your dog?',
        options: [
            { text: 'Very cuddly - always wants contact', value: 'very_high', traits: { affection: 'very_high' } },
            { text: 'Affectionate - likes attention', value: 'high', traits: { affection: 'high' } },
            { text: 'Moderately affectionate', value: 'moderate', traits: { affection: 'moderate' } },
            { text: 'Independent - prefers space', value: 'low', traits: { affection: 'low' } }
        ]
    }
];

const breeds = {
    'Golden Retriever': {
        traits: {
            size: ['large'],
            build: ['athletic', 'muscular'],
            coat: ['long', 'medium'],
            color: ['golden'],
            muzzle: ['medium', 'long'],
            ears: ['floppy'],
            energy: ['high', 'moderate'],
            exercise: ['high', 'moderate'],
            vocal: ['moderate', 'quiet'],
            social: ['friendly'],
            family_friendly: ['excellent'],
            trainability: ['high'],
            prey_drive: ['low', 'moderate'],
            behavior: ['companion', 'hunting'],
            affection: ['very_high', 'high']
        },
        description: 'Golden Retrievers are friendly, intelligent, and devoted family companions. Known for their gentle temperament and love of play, they excel in obedience and are wonderful with children.',
        size: 'Large',
        temperament: 'Friendly & Devoted',
        energy: 'High'
    },
    'Labrador Retriever': {
        traits: {
            size: ['large'],
            build: ['athletic', 'muscular'],
            coat: ['short', 'medium'],
            color: ['golden', 'dark', 'light'],
            muzzle: ['medium'],
            ears: ['floppy'],
            energy: ['high', 'very_high'],
            exercise: ['high', 'very_high'],
            vocal: ['moderate'],
            social: ['friendly'],
            family_friendly: ['excellent'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['companion', 'hunting'],
            affection: ['very_high']
        },
        description: 'Labs are outgoing, even-tempered, and active companions. They are excellent family dogs, love water, and are known for their friendliness and trainability.',
        size: 'Large',
        temperament: 'Outgoing & Active',
        energy: 'Very High'
    },
    'German Shepherd': {
        traits: {
            size: ['large'],
            build: ['athletic', 'muscular'],
            coat: ['medium'],
            color: ['dark', 'multi'],
            muzzle: ['long', 'medium'],
            ears: ['pointed'],
            energy: ['high', 'very_high'],
            exercise: ['high', 'very_high'],
            vocal: ['frequent', 'moderate'],
            social: ['protective', 'cautious'],
            family_friendly: ['good', 'excellent'],
            trainability: ['high'],
            prey_drive: ['moderate', 'high'],
            behavior: ['guarding', 'herding'],
            affection: ['high', 'moderate']
        },
        description: 'German Shepherds are confident, courageous, and intelligent working dogs. They are loyal protectors, highly trainable, and excel in police and military work.',
        size: 'Large',
        temperament: 'Loyal & Protective',
        energy: 'Very High'
    },
    'Beagle': {
        traits: {
            size: ['small', 'medium'],
            build: ['muscular', 'stocky'],
            coat: ['short'],
            color: ['multi'],
            muzzle: ['medium'],
            ears: ['floppy'],
            energy: ['moderate', 'high'],
            exercise: ['moderate', 'high'],
            vocal: ['very_vocal', 'frequent'],
            social: ['friendly'],
            family_friendly: ['excellent', 'good'],
            trainability: ['moderate'],
            prey_drive: ['high'],
            behavior: ['hunting'],
            affection: ['high']
        },
        description: 'Beagles are merry, friendly hounds with excellent noses. They are curious, love to follow scents, and are great family dogs with a playful nature.',
        size: 'Small-Medium',
        temperament: 'Merry & Curious',
        energy: 'Moderate'
    },
    'Bulldog': {
        traits: {
            size: ['medium'],
            build: ['stocky', 'muscular'],
            coat: ['short'],
            color: ['light', 'multi'],
            muzzle: ['flat'],
            ears: ['small'],
            energy: ['low'],
            exercise: ['minimal', 'moderate'],
            vocal: ['quiet', 'moderate'],
            social: ['friendly', 'cautious'],
            family_friendly: ['excellent'],
            trainability: ['moderate', 'low'],
            prey_drive: ['low'],
            behavior: ['companion'],
            affection: ['high', 'very_high']
        },
        description: 'Bulldogs are calm, courageous, and friendly companions. Despite their tough appearance, they are gentle, affectionate, and great with children.',
        size: 'Medium',
        temperament: 'Calm & Friendly',
        energy: 'Low'
    },
    'Poodle': {
        traits: {
            size: ['small', 'medium', 'large'],
            build: ['athletic'],
            coat: ['curly'],
            color: ['dark', 'light', 'golden'],
            muzzle: ['medium', 'long'],
            ears: ['floppy'],
            energy: ['high', 'moderate'],
            exercise: ['moderate', 'high'],
            vocal: ['moderate'],
            social: ['friendly', 'cautious'],
            family_friendly: ['excellent', 'good'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['companion'],
            affection: ['high']
        },
        description: 'Poodles are exceptionally intelligent, active, and elegant dogs. They are hypoallergenic, highly trainable, and come in three sizes: toy, miniature, and standard.',
        size: 'Varies',
        temperament: 'Smart & Elegant',
        energy: 'Moderate-High'
    },
    'Chihuahua': {
        traits: {
            size: ['small'],
            build: ['stocky'],
            coat: ['short', 'long'],
            color: ['golden', 'dark', 'light', 'multi'],
            muzzle: ['medium'],
            ears: ['pointed', 'semi'],
            energy: ['moderate', 'high'],
            exercise: ['minimal', 'moderate'],
            vocal: ['very_vocal', 'frequent'],
            social: ['cautious', 'protective'],
            family_friendly: ['okay', 'limited'],
            trainability: ['moderate'],
            prey_drive: ['low'],
            behavior: ['companion'],
            affection: ['very_high']
        },
        description: 'Chihuahuas are tiny but mighty, with big personalities. They are loyal, charming, and often bond closely with one person. Despite their size, they are bold and confident.',
        size: 'Tiny',
        temperament: 'Bold & Loyal',
        energy: 'Moderate'
    },
    'Siberian Husky': {
        traits: {
            size: ['large'],
            build: ['athletic'],
            coat: ['long', 'medium'],
            color: ['multi', 'dark', 'light'],
            muzzle: ['medium'],
            ears: ['pointed'],
            energy: ['very_high'],
            exercise: ['very_high'],
            vocal: ['very_vocal'],
            social: ['friendly'],
            family_friendly: ['good'],
            trainability: ['moderate', 'low'],
            prey_drive: ['high'],
            behavior: ['companion'],
            affection: ['moderate']
        },
        description: 'Huskies are energetic, outgoing, and mischievous. Originally bred for sledding, they have incredible stamina and love to run. They are known for their striking appearance and vocal nature.',
        size: 'Large',
        temperament: 'Energetic & Outgoing',
        energy: 'Very High'
    },
    'Border Collie': {
        traits: {
            size: ['medium'],
            build: ['athletic'],
            coat: ['medium', 'long'],
            color: ['multi', 'dark'],
            muzzle: ['medium'],
            ears: ['semi', 'pointed'],
            energy: ['very_high'],
            exercise: ['very_high'],
            vocal: ['moderate', 'frequent'],
            social: ['cautious', 'friendly'],
            family_friendly: ['good'],
            trainability: ['high'],
            prey_drive: ['high'],
            behavior: ['herding'],
            affection: ['high']
        },
        description: 'Border Collies are workaholics with incredible intelligence and energy. They excel at herding, agility, and obedience. They need mental and physical stimulation.',
        size: 'Medium',
        temperament: 'Intelligent & Energetic',
        energy: 'Very High'
    },
    'Dachshund': {
        traits: {
            size: ['small'],
            build: ['long_low'],
            coat: ['short', 'long'],
            color: ['dark', 'golden', 'multi'],
            muzzle: ['long'],
            ears: ['floppy'],
            energy: ['moderate'],
            exercise: ['moderate'],
            vocal: ['frequent'],
            social: ['cautious', 'friendly'],
            family_friendly: ['good', 'okay'],
            trainability: ['moderate'],
            prey_drive: ['high'],
            behavior: ['hunting'],
            affection: ['high']
        },
        description: 'Dachshunds are clever, lively, and courageous. Their long bodies and short legs make them distinctive. They were bred to hunt badgers and have a bold personality.',
        size: 'Small',
        temperament: 'Clever & Courageous',
        energy: 'Moderate'
    },
    'Yorkshire Terrier': {
        traits: {
            size: ['small'],
            build: ['stocky'],
            coat: ['long'],
            color: ['golden', 'multi', 'dark'],
            muzzle: ['medium'],
            ears: ['pointed', 'small'],
            energy: ['moderate', 'high'],
            exercise: ['minimal', 'moderate'],
            vocal: ['frequent', 'very_vocal'],
            social: ['cautious'],
            family_friendly: ['okay', 'limited'],
            trainability: ['moderate'],
            prey_drive: ['moderate'],
            behavior: ['companion'],
            affection: ['very_high']
        },
        description: 'Yorkies are feisty, affectionate, and make excellent apartment dogs. Despite their small size, they have big personalities and were originally bred to catch rats.',
        size: 'Tiny',
        temperament: 'Feisty & Affectionate',
        energy: 'Moderate'
    },
    'Boxer': {
        traits: {
            size: ['large'],
            build: ['muscular', 'athletic'],
            coat: ['short'],
            color: ['golden', 'multi'],
            muzzle: ['square', 'flat'],
            ears: ['floppy', 'small'],
            energy: ['high', 'very_high'],
            exercise: ['high'],
            vocal: ['moderate'],
            social: ['friendly', 'protective'],
            family_friendly: ['excellent'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['guarding', 'companion'],
            affection: ['very_high']
        },
        description: 'Boxers are fun-loving, bright, and active. They remain playful well into adulthood and are known for their patience with children and loyalty to family.',
        size: 'Large',
        temperament: 'Playful & Loyal',
        energy: 'High'
    },
    'Shih Tzu': {
        traits: {
            size: ['small'],
            build: ['stocky'],
            coat: ['long'],
            color: ['multi', 'golden', 'light'],
            muzzle: ['flat'],
            ears: ['floppy'],
            energy: ['low', 'moderate'],
            exercise: ['minimal'],
            vocal: ['quiet', 'moderate'],
            social: ['friendly'],
            family_friendly: ['excellent'],
            trainability: ['moderate'],
            prey_drive: ['low'],
            behavior: ['companion'],
            affection: ['very_high']
        },
        description: 'Shih Tzus are affectionate, outgoing, and bred to be companion dogs. They love being with people and are happy, lively little dogs that thrive on human companionship.',
        size: 'Small',
        temperament: 'Affectionate & Outgoing',
        energy: 'Low'
    },
    'Australian Shepherd': {
        traits: {
            size: ['medium', 'large'],
            build: ['athletic'],
            coat: ['medium', 'long'],
            color: ['multi', 'dark'],
            muzzle: ['medium'],
            ears: ['semi'],
            energy: ['very_high'],
            exercise: ['very_high'],
            vocal: ['moderate', 'frequent'],
            social: ['cautious', 'friendly'],
            family_friendly: ['excellent', 'good'],
            trainability: ['high'],
            prey_drive: ['high'],
            behavior: ['herding'],
            affection: ['high']
        },
        description: 'Australian Shepherds are smart, work-oriented, and exuberant. They are highly versatile, excel at herding, and need lots of physical and mental exercise.',
        size: 'Medium',
        temperament: 'Smart & Energetic',
        energy: 'Very High'
    },
    'Cocker Spaniel': {
        traits: {
            size: ['medium', 'small'],
            build: ['stocky', 'muscular'],
            coat: ['long', 'medium'],
            color: ['golden', 'dark', 'multi'],
            muzzle: ['medium'],
            ears: ['floppy'],
            energy: ['moderate', 'high'],
            exercise: ['moderate'],
            vocal: ['moderate'],
            social: ['friendly'],
            family_friendly: ['excellent'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['hunting', 'companion'],
            affection: ['very_high']
        },
        description: 'Cocker Spaniels are gentle, smart, and happy. They are sporting dogs with beautiful, silky coats and sweet, affectionate dispositions.',

        size: 'Medium',
        temperament: 'Gentle & Happy',
        energy: 'Moderate'
    },
    'Great Dane': {
        traits: {
            size: ['giant'],
            build: ['athletic', 'muscular'],
            coat: ['short'],
            color: ['dark', 'multi', 'golden'],
            muzzle: ['long', 'square'],
            ears: ['floppy', 'semi'],
            energy: ['moderate'],
            exercise: ['moderate'],
            vocal: ['quiet', 'moderate'],
            social: ['friendly', 'cautious'],
            family_friendly: ['excellent', 'good'],
            trainability: ['high'],
            prey_drive: ['low'],
            behavior: ['companion', 'guarding'],
            affection: ['high', 'very_high']
        },
        description: 'Great Danes are gentle giants, known for their patience and friendliness. Despite their imposing size, they are affectionate and make excellent family companions.',
        size: 'Giant',
        temperament: 'Gentle & Friendly',
        energy: 'Moderate'
    },
    'Rottweiler': {
        traits: {
            size: ['large', 'giant'],
            build: ['muscular', 'stocky'],
            coat: ['short'],
            color: ['dark', 'multi'],
            muzzle: ['medium', 'square'],
            ears: ['floppy', 'small'],
            energy: ['moderate', 'high'],
            exercise: ['moderate', 'high'],
            vocal: ['moderate', 'quiet'],
            social: ['protective', 'reserved'],
            family_friendly: ['good', 'excellent'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['guarding'],
            affection: ['high', 'moderate']
        },
        description: 'Rottweilers are loyal, loving, and confident guardians. They are calm, courageous, and have a strong desire to protect their family.',
        size: 'Large',
        temperament: 'Loyal & Confident',
        energy: 'Moderate'
    },
    'Pembroke Welsh Corgi': {
        traits: {
            size: ['small', 'medium'],
            build: ['long_low'],
            coat: ['medium'],
            color: ['golden', 'multi'],
            muzzle: ['medium'],
            ears: ['pointed'],
            energy: ['high', 'moderate'],
            exercise: ['moderate', 'high'],
            vocal: ['frequent', 'moderate'],
            social: ['friendly'],
            family_friendly: ['excellent'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['herding'],
            affection: ['high']
        },
        description: 'Corgis are smart, affectionate, and alert. Despite their short legs, they are athletic herding dogs with a big-dog bark and lots of personality.',
        size: 'Small-Medium',
        temperament: 'Smart & Affectionate',
        energy: 'High'
    },
    'Pomeranian': {
        traits: {
            size: ['small'],
            build: ['stocky'],
            coat: ['long'],
            color: ['golden', 'light', 'dark', 'multi'],
            muzzle: ['medium'],
            ears: ['pointed', 'small'],
            energy: ['moderate', 'high'],
            exercise: ['minimal', 'moderate'],
            vocal: ['very_vocal', 'frequent'],
            social: ['cautious', 'friendly'],
            family_friendly: ['okay', 'good'],
            trainability: ['moderate'],
            prey_drive: ['low'],
            behavior: ['companion'],
            affection: ['high', 'very_high']
        },
        description: 'Pomeranians are inquisitive, bold, and lively. They have a fluffy coat and fox-like face, and despite their small size, they think they are much larger dogs.',
        size: 'Tiny',
        temperament: 'Bold & Lively',
        energy: 'Moderate'
    },
    'Bernese Mountain Dog': {
        traits: {
            size: ['giant', 'large'],
            build: ['stocky', 'muscular'],
            coat: ['long'],
            color: ['multi', 'dark'],
            muzzle: ['medium'],
            ears: ['floppy'],
            energy: ['moderate'],
            exercise: ['moderate'],
            vocal: ['quiet', 'moderate'],
            social: ['friendly'],
            family_friendly: ['excellent'],
            trainability: ['high'],
            prey_drive: ['low'],
            behavior: ['companion'],
            affection: ['very_high']
        },
        description: 'Bernese Mountain Dogs are gentle, calm, and affectionate. They are large, sturdy dogs with striking tri-colored coats and a sweet, patient nature.',
        size: 'Giant',
        temperament: 'Gentle & Calm',
        energy: 'Moderate'
    }
};

function startQuiz() {
    dogName = document.getElementById('dog-name').value.trim();
    if (!dogName) {
        alert('Please enter your dog\'s name!');
        return;
    }

    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');

    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

    container.innerHTML = `
        <div class="question">
            <h3 class="question-title">${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(${index})">
                        <div class="option-text">${option.text}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('next-btn').disabled = true;
}

function selectOption(index) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');

    answers[question.id] = question.options[index];
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        calculateResults();
    }
}

function calculateResults() {
    const scores = {};

    for (const [breedName, breedData] of Object.entries(breeds)) {
        let score = 0;
        let maxScore = 0;

        for (const [questionId, answer] of Object.entries(answers)) {
            const traitType = Object.keys(answer.traits)[0];
            const traitValue = answer.traits[traitType];

            maxScore += 1;

            if (breedData.traits[traitType] && breedData.traits[traitType].includes(traitValue)) {
                score += 1;
            }
        }

        scores[breedName] = (score / maxScore) * 100;
    }

    const sortedBreeds = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    displayResults(sortedBreeds);
}

function displayResults(sortedBreeds) {
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('results-page').classList.remove('hidden');

    const [topBreed, ...alternatives] = sortedBreeds;
    const [breedName, confidence] = topBreed;
    const breedData = breeds[breedName];

    document.getElementById('dog-name-result').textContent = dogName;
    document.getElementById('breed-result').textContent = breedName;
    document.getElementById('confidence-result').textContent = `${Math.round(confidence)}% Match`;

    document.getElementById('breed-description').innerHTML = `
        ${breedData.description}
    `;

    document.getElementById('breed-traits').innerHTML = `
        <div class="traits">
            <div class="trait-label">Size</div>
            <div class="trait-value">${breedData.size}</div>
        </div>
        <div class="trait">
            <div class="trait-label">Temperament</div>
            <div class="trait-value">${breedData.temperament}</div>
        </div>
        <div class="trait">

            <div class="trait-label">Energy</div>
            <div class="trait-value">${breedData.energy}</div>
        </div>
            `;

    document.getElementById('alternatives-container').innerHTML = alternatives.map(([name, score]) => `
        <div class="alt-breed">
            <span class="alt-breed-name">${name}</span>
                <span class="alt-confidence">${Math.round(score)}% match</span>
        </div>
    `).join('');
}

function restartQuiz() {
    currentQuestion = 0;
    answers = {};
    dogName = '';

    document.getElementById('results-page').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('dog-name').value = '';
}