var dogName = '';
var currentQ = 0;
var answers = {};

var questions = [
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
        question: "How would you describe your dog's body build?",
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
        question: "What does your dog's face look like?",
        options: [
            { text: 'Long snout/muzzle', value: 'long', traits: { muzzle: 'long' } },
            { text: 'Medium-length snout', value: 'medium', traits: { muzzle: 'medium' } },
            { text: 'Short/pushed-in face (flat)', value: 'flat', traits: { muzzle: 'flat' } },
            { text: 'Square or broad muzzle', value: 'square', traits: { muzzle: 'square' } }
        ]
    },
    {
        id: 'ears',
        question: "Describe your dog's ears:",
        options: [
            { text: 'Floppy and long', value: 'floppy', traits: { ears: 'floppy' } },
            { text: 'Pointed and upright', value: 'pointed', traits: { ears: 'pointed' } },
            { text: 'Semi-erect (fold over)', value: 'semi', traits: { ears: 'semi' } },
            { text: 'Small and close to head', value: 'small', traits: { ears: 'small' } }
        ]
    },
    {
        id: 'energy',
        question: "What's your dog's energy level?",
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

var breeds = {
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
            affection: ['very_high', 'high']
        },
        description: 'Labs are outgoing, energetic, and endlessly friendly. They are one of the most popular breeds in the world for a reason - great with families, easy to train, and always happy.',
        size: 'Large',
        temperament: 'Outgoing & Friendly',
        energy: 'High'
    },

    'German Shepherd': {
        traits: {
            size: ['large'],
            build: ['athletic', 'muscular'],
            coat: ['medium', 'long'],
            color: ['dark', 'golden', 'multi'],
            muzzle: ['long'],
            ears: ['pointed'],
            energy: ['high', 'very_high'],
            exercise: ['high', 'very_high'],
            vocal: ['frequent', 'moderate'],
            social: ['cautious', 'reserved'],
            family_friendly: ['good'],
            trainability: ['high'],
            prey_drive: ['high', 'moderate'],
            behavior: ['guarding', 'herding'],
            affection: ['high', 'moderate']
        },
        description: 'German Shepherds are confident, courageous, and smart. They are incredibly versatile - used as police dogs, service animals, and loyal family protectors.',
        size: 'Large',
        temperament: 'Confident & Loyal',
        energy: 'High'
    },

    'French Bulldog': {
        traits: {
            size: ['small'],
            build: ['muscular', 'stocky'],
            coat: ['short'],
            color: ['multi', 'dark', 'light'],
            muzzle: ['flat'],
            ears: ['pointed'],
            energy: ['low', 'moderate'],
            exercise: ['minimal', 'moderate'],
            vocal: ['moderate', 'frequent'],
            social: ['friendly', 'cautious'],
            family_friendly: ['excellent', 'good'],
            trainability: ['moderate'],
            prey_drive: ['low'],
            behavior: ['companion'],
            affection: ['very_high', 'high']
        },
        description: 'French Bulldogs are charming, adaptable, and totally people-oriented. They do not need a lot of exercise and are perfect for apartment living.',
        size: 'Small',
        temperament: 'Charming & Adaptable',
        energy: 'Low'
    },

    'Border Collie': {
        traits: {
            size: ['medium'],
            build: ['athletic'],
            coat: ['medium', 'long'],
            color: ['multi', 'dark'],
            muzzle: ['medium', 'long'],
            ears: ['semi', 'pointed'],
            energy: ['very_high', 'high'],
            exercise: ['very_high', 'high'],
            vocal: ['moderate', 'frequent'],
            social: ['cautious', 'friendly'],
            family_friendly: ['good'],
            trainability: ['high'],
            prey_drive: ['high', 'moderate'],
            behavior: ['herding'],
            affection: ['high', 'moderate']
        },
        description: 'Border Collies are widely considered the most intelligent dog breed. They have an intense work drive and need a lot of mental and physical stimulation to stay happy.',
        size: 'Medium',
        temperament: 'Intelligent & Intense',
        energy: 'Very High'
    },

    'Poodle': {
        traits: {
            size: ['medium', 'small', 'large'],
            build: ['athletic'],
            coat: ['curly'],
            color: ['light', 'dark', 'golden'],
            muzzle: ['long'],
            ears: ['floppy'],
            energy: ['high', 'moderate'],
            exercise: ['high', 'moderate'],
            vocal: ['moderate'],
            social: ['friendly', 'cautious'],
            family_friendly: ['excellent'],
            trainability: ['high'],
            prey_drive: ['moderate', 'low'],
            behavior: ['companion'],
            affection: ['high', 'very_high']
        },
        description: 'Poodles are incredibly smart, athletic, and elegant. Despite the fancy haircuts they are often seen with, they were originally bred as water retrievers and love to stay active.',
        size: 'Medium',
        temperament: 'Smart & Elegant',
        energy: 'High'
    },

    'Beagle': {
        traits: {
            size: ['small', 'medium'],
            build: ['stocky', 'athletic'],
            coat: ['short'],
            color: ['multi', 'golden'],
            muzzle: ['medium'],
            ears: ['floppy'],
            energy: ['high', 'moderate'],
            exercise: ['high', 'moderate'],
            vocal: ['very_vocal', 'frequent'],
            social: ['friendly'],
            family_friendly: ['excellent'],
            trainability: ['moderate'],
            prey_drive: ['high', 'moderate'],
            behavior: ['hunting'],
            affection: ['high', 'very_high']
        },
        description: 'Beagles are merry, curious, and friendly. They have an excellent nose and a loud howl, originally bred for hunting in packs. They love people and are great with kids.',
        size: 'Small-Medium',
        temperament: 'Merry & Curious',
        energy: 'High'
    },

    'Husky': {
        traits: {
            size: ['large', 'medium'],
            build: ['athletic'],
            coat: ['medium', 'long'],
            color: ['multi', 'light', 'dark'],
            muzzle: ['medium'],
            ears: ['pointed'],
            energy: ['very_high', 'high'],
            exercise: ['very_high', 'high'],
            vocal: ['very_vocal', 'frequent'],
            social: ['friendly'],
            family_friendly: ['good', 'excellent'],
            trainability: ['moderate'],
            prey_drive: ['high'],
            behavior: ['hunting', 'companion'],
            affection: ['high', 'moderate']
        },
        description: 'Huskies are energetic, mischievous, and love to talk. Originally sled dogs from Siberia, they need lots of exercise and are known for their striking appearance and loud vocalizations.',
        size: 'Large',
        temperament: 'Energetic & Vocal',
        energy: 'Very High'
    },

    'Dachshund': {
        traits: {
            size: ['small'],
            build: ['long_low'],
            coat: ['short', 'long', 'medium'],
            color: ['dark', 'golden', 'multi'],
            muzzle: ['long'],
            ears: ['floppy'],
            energy: ['moderate', 'high'],
            exercise: ['moderate', 'minimal'],
            vocal: ['frequent', 'very_vocal'],
            social: ['cautious', 'friendly'],
            family_friendly: ['okay', 'good'],
            trainability: ['moderate'],
            prey_drive: ['high', 'moderate'],
            behavior: ['hunting'],
            affection: ['high', 'very_high']
        },
        description: 'Dachshunds are clever, lively, and devoted little dogs with a huge personality. Their long body and stubby legs were designed for digging into badger burrows.',
        size: 'Small',
        temperament: 'Clever & Lively',
        energy: 'Moderate'
    },

    'Rottweiler': {
        traits: {
            size: ['large', 'giant'],
            build: ['muscular', 'stocky'],
            coat: ['short'],
            color: ['dark', 'multi'],
            muzzle: ['square', 'medium'],
            ears: ['small', 'floppy'],
            energy: ['moderate', 'high'],
            exercise: ['high', 'moderate'],
            vocal: ['moderate', 'quiet'],
            social: ['reserved', 'protective'],
            family_friendly: ['good'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['guarding'],
            affection: ['high', 'moderate']
        },
        description: 'Rottweilers are powerful, loyal, and confident. They are natural guard dogs who are deeply devoted to their families. With proper training they are calm and loving companions.',
        size: 'Large',
        temperament: 'Loyal & Confident',
        energy: 'Moderate'
    },

    'Shih Tzu': {
        traits: {
            size: ['small'],
            build: ['stocky'],
            coat: ['long'],
            color: ['multi', 'light', 'golden', 'dark'],
            muzzle: ['flat'],
            ears: ['floppy'],
            energy: ['low', 'moderate'],
            exercise: ['minimal', 'moderate'],
            vocal: ['moderate'],
            social: ['friendly'],
            family_friendly: ['excellent', 'good'],
            trainability: ['moderate'],
            prey_drive: ['low'],
            behavior: ['companion'],
            affection: ['very_high', 'high']
        },
        description: 'Shih Tzus were bred to be companions and that is exactly what they are. They are affectionate, outgoing little dogs who thrive on human company and do not need much space.',
        size: 'Small',
        temperament: 'Affectionate & Outgoing',
        energy: 'Low'
    },

    'Boxer': {
        traits: {
            size: ['large', 'medium'],
            build: ['muscular'],
            coat: ['short'],
            color: ['golden', 'multi'],
            muzzle: ['flat', 'square'],
            ears: ['small', 'floppy'],
            energy: ['high', 'very_high'],
            exercise: ['high', 'very_high'],
            vocal: ['moderate'],
            social: ['friendly', 'cautious'],
            family_friendly: ['excellent'],
            trainability: ['moderate', 'high'],
            prey_drive: ['moderate'],
            behavior: ['guarding', 'companion'],
            affection: ['very_high', 'high']
        },
        description: 'Boxers are playful, energetic, and deeply loyal. They are known for their puppy-like enthusiasm well into adulthood and their strong bond with family members.',
        size: 'Large',
        temperament: 'Playful & Loyal',
        energy: 'High'
    },

    'Australian Shepherd': {
        traits: {
            size: ['medium'],
            build: ['athletic', 'muscular'],
            coat: ['medium', 'long'],
            color: ['multi'],
            muzzle: ['medium'],
            ears: ['semi', 'floppy'],
            energy: ['very_high', 'high'],
            exercise: ['very_high', 'high'],
            vocal: ['moderate', 'frequent'],
            social: ['cautious', 'friendly'],
            family_friendly: ['good', 'excellent'],
            trainability: ['high'],
            prey_drive: ['high', 'moderate'],
            behavior: ['herding'],
            affection: ['high', 'very_high']
        },
        description: 'Australian Shepherds are brilliant, work-oriented, and incredibly agile. Despite their name they were developed in the US. They need a job to do or they will invent their own.',
        size: 'Medium',
        temperament: 'Brilliant & Energetic',
        energy: 'Very High'
    },

    'Doberman': {
        traits: {
            size: ['large'],
            build: ['athletic', 'muscular'],
            coat: ['short'],
            color: ['dark', 'multi'],
            muzzle: ['long'],
            ears: ['pointed'],
            energy: ['high', 'very_high'],
            exercise: ['high', 'very_high'],
            vocal: ['moderate', 'quiet'],
            social: ['reserved', 'protective'],
            family_friendly: ['good'],
            trainability: ['high'],
            prey_drive: ['moderate', 'high'],
            behavior: ['guarding'],
            affection: ['high', 'moderate']
        },
        description: 'Dobermans are sleek, powerful, and highly intelligent. They are one of the best guard dogs in the world and are extremely loyal to their owners. Very trainable with the right handler.',
        size: 'Large',
        temperament: 'Alert & Loyal',
        energy: 'High'
    },

    'Corgi': {
        traits: {
            size: ['small', 'medium'],
            build: ['long_low', 'stocky'],
            coat: ['medium'],
            color: ['golden', 'multi'],
            muzzle: ['medium'],
            ears: ['pointed'],
            energy: ['high', 'moderate'],
            exercise: ['moderate', 'high'],
            vocal: ['frequent', 'moderate'],
            social: ['friendly', 'cautious'],
            family_friendly: ['good', 'excellent'],
            trainability: ['high'],
            prey_drive: ['moderate'],
            behavior: ['herding'],
            affection: ['high']
        },
        description: 'Corgis are smart, affectionate, and alert. Despite their short legs they are athletic herding dogs with a big-dog bark and loads of personality.',
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
        description: 'Pomeranians are bold, inquisitive, and lively little dogs. They have a thick fluffy coat and a fox-like face, and despite their small size they absolutely do not know it.',
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
        description: 'Bernese Mountain Dogs are gentle, calm, and deeply affectionate. They are large sturdy dogs with striking tri-colored coats and the sweetest, most patient nature you will find.',
        size: 'Giant',
        temperament: 'Gentle & Calm',
        energy: 'Moderate'
    }
};


function startQuiz() {
    dogName = document.getElementById('dog-name').value.trim();
    if (!dogName) {
        alert("Please enter your dog's name first!");
        return;
    }

    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    var q = questions[currentQ];
    var container = document.getElementById('question-container');

    var pct = ((currentQ + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = 'Question ' + (currentQ + 1) + ' of ' + questions.length;

    var optionsHTML = '';
    for (var i = 0; i < q.options.length; i++) {
        optionsHTML += '<div class="option" data-index="' + i + '"><div class="option-text">' + q.options[i].text + '</div></div>';
    }

    container.innerHTML = '<div class="question"><h3 class="question-title">' + q.question + '</h3><div class="options">' + optionsHTML + '</div></div>';

    document.getElementById('next-btn').disabled = true;

    var opts = container.querySelectorAll('.option');
    opts.forEach(function(el) {
        el.addEventListener('click', function() {
            pickOption(parseInt(el.getAttribute('data-index')));
        });
    });
}

function pickOption(idx) {
    var q = questions[currentQ];
    var opts = document.querySelectorAll('.option');

    opts.forEach(function(o) { o.classList.remove('selected'); });
    opts[idx].classList.add('selected');

    answers[q.id] = q.options[idx];
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        showQuestion();
    } else {
        getResults();
    }
}

function getResults() {
    var scores = {};

    for (var breedName in breeds) {
        var breedData = breeds[breedName];
        var score = 0;
        var total = 0;

        for (var qId in answers) {
            var ans = answers[qId];
            var traitKey = Object.keys(ans.traits)[0];
            var traitVal = ans.traits[traitKey];
            total++;

            if (breedData.traits[traitKey] && breedData.traits[traitKey].indexOf(traitVal) !== -1) {
                score++;
            }
        }

        scores[breedName] = (score / total) * 100;
    }

    var sorted = Object.entries(scores).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 3);
    showResults(sorted);
}

function showResults(sorted) {
    document.getElementById('quiz-page').classList.add('hidden');
    document.getElementById('results-page').classList.remove('hidden');

    var top = sorted[0];
    var breedName = top[0];
    var confidence = top[1];
    var breedData = breeds[breedName];

    document.getElementById('dog-name-result').textContent = dogName;
    document.getElementById('breed-result').textContent = breedName;
    document.getElementById('confidence-result').textContent = Math.round(confidence) + '% Match';
    document.getElementById('breed-description').textContent = breedData.description;

    document.getElementById('breed-traits').innerHTML =
        '<div class="traits"><div class="traits-label">Size</div><div class="traits-value">' + breedData.size + '</div></div>' +
        '<div class="traits"><div class="traits-label">Temperament</div><div class="traits-value">' + breedData.temperament + '</div></div>' +
        '<div class="traits"><div class="traits-label">Energy</div><div class="traits-value">' + breedData.energy + '</div></div>';

    var altHTML = '';
    for (var i = 1; i < sorted.length; i++) {
        altHTML += '<div class="alt-breed"><span class="alt-breed-name">' + sorted[i][0] + '</span><span class="alt-confindence">' + Math.round(sorted[i][1]) + '% match</span></div>';
    }
    document.getElementById('alternatives-container').innerHTML = altHTML;
}

function restartQuiz() {
    currentQ = 0;
    answers = {};
    dogName = '';
    document.getElementById('results-page').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('dog-name').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
});
