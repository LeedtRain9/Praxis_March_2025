const questions = {
    Elektroinstallation: [
        { 
            type: "text",
            question: 'Wofür steht das "Y" in der Bezeichnung NYM?', 
            answers: ["Die Leiter sind aus PVC.", "Der Mantel ist aus PVC.", "Das 'Y' deutet auf eine Telefonleitung hin."], 
            correct: [0] 
        },

        { 
            type: "image",
            question: "Wie sollte Ihre Abzweigdose definitiv nicht aussehen?", 
            images: ["Bilder Elektroinstallation/bild1.jpg", "Bilder Elektroinstallation/bild2.jpg", "Bilder Elektroinstallation/bild3.jpg"], 
            correct: [0, 1] 
        },

        { 
            type: "text",
            question: 'Wie viele Schaltstellen liegen bei einer Wechselschaltung vor?', 
            answers: ["3", "1", "2"], 
            correct: [2] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Welcher grundsätzlicher Fehler liegt hier vor?",
            image: "Bilder Elektroinstallation/bild4.jpg", // Bild-URL
            answers: ["Es wurden falsche Verbinder genutzt.", "Für L1 muss der graue Leiter eingesetzt werden.", "Die Verbindung aller PE wurde vergessen."],
            correct: [2] // Index der korrekten Antwort
        },

        { 
            type: "text",
            question: 'Welche Aussage zur Wechselschaltung ist falsch?', 
            answers: ["Es werden eine oder mehrer Lampen geschaltet.", "Es werden eine oder mehrer Lampen unabhängig voneinander geschaltet.", "Beide Schalterwippen müssen in der gleichen Position sein."], 
            correct: [0] 
        },
        
        { 
            type: "text",
            question: 'Ihr Steckdosenstromkreis ist mit einem C 16A-Automaten abgesichert. Der Leiterwiderstand L - N beträgt 2,4 Ohm. Beurteilen Sie die Situation. Ist die Sicherheit noch gegeben?', 
            answers: ["Ja. Im Kurzschlussfall löst der Automat sicher aus.", "Nein. Der Fehlerstrom wäre zu niedrig.", "Ja, der Fehlerstrom wäre zu niedrig"], 
            correct: [1] 
        },
                
        { 
            type: "text",
            question: 'Der Fehlerdifferenznennstrom auf Ihrem RCD ist für 300 mA ausgelegt. Gilt dieser RCD für Personen oder Brandschutz ?', 
            answers: ["Nur für Personenschutz", "Für Personen- und Brandschutz", "Nur für Brandschutz"], 
            correct: [2] 
        },
        
        { 
            type: "image",
            question: "Welches Symbol gilt für Wechselschalter?", 
            images: ["Bilder Elektroinstallation/bild19.jpg", "Bilder Elektroinstallation/bild18.jpg", "Bilder Elektroinstallation/bild20.jpg"], 
            correct: [1] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Darf man die beiden Leiter (siehe grüner Kreis) vertauschen?",
            image: "Bilder Elektroinstallation/bild17.jpg", // Bild-URL
            answers: ["Nein. Sonst gibt es einen Kurzschluss.", "Ja, die Funktion bleibt trotzdem erhalten.", "Nein, da sonst zwei Aus-Schaltungen in Reihe liegen würden."],
            correct: [1] // Index der korrekten Antwort
        },
                
        { 
            type: "text",
            question: ' Wie viele Kreuzschalter werden benötigt, wenn fünf Schaltstellen vorliegen?', 
            answers: ["Man benötigt 2 Kreuzschalter und 3 Wechselschalter.", "Es sind 4 Wechselschalter und 1 Kreuzschalter.", "Man benötigt 3 Kreuzschalter und 2 Wechselschalter"], 
            correct: [2] 
        },

        { 
            type: "image",
            question: "Bei welchem Schalter handelt es sich um einen Kreuzschalter?", 
            images: ["Bilder Elektroinstallation/bild22.jpg", "Bilder Elektroinstallation/bild23.jpg"], 
            correct: [1] 
        },

        { 
            type: "text",
            question: "Welche Aussage zu nicht benötigten Leitern ('Blinde Adern') in Abzweig- und Schalterdosen ist richtig?", 
            answers: ["So kurz wie möglich abschneiden.", "Alle unter eine gemeinsame Klemme.", "Wenn sie keine Spannung führen können, dürfen diese auch ohne Klemme sauber in der Dose gelegt werden."], 
            correct: [2] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Im vorliegenden Fall wurde der gelb markierte L-Leiter mit dem grünen Korrespondierenden Anschluss vertauscht. Welche Auswirkung hat dieser Fehler?",
            image: "Bilder Elektroinstallation/bild21.jpg", // Bild-URL
            answers: ["Keine Auswirkung.", "Es liegt eine Ausschaltung vor, die mit dem Schalter ein- und ausgeschaltet werden kann.", "Die Lampe leuchtet überhaupt nicht."],
            correct: [1] // Index der korrekten Antwort
        },

        { 
            type: "image",
            question: "Welches Schaltbild zeigt einen Wechselschalter?", 
            images: ["Bilder Elektroinstallation/bild25.jpg", "Bilder Elektroinstallation/bild26.jpg", "Bilder Elektroinstallation/bild27.jpg"], 
            correct: [0] 
        },
        
        { 
            type: "text",
            question: "Steigt der Widerstandswert eines Leiters, wenn der Querschnitt größer gewählt wird?", 
            answers: ["Nein, der Leiterwiderstand wird kleiner.", "Ja, der Widerstandswert wird größer.", "Wenn der Querschnitt sich lediglich um eine Normstufe erhöht, ändert sich faktisch nichts."], 
            correct: [0] 
        },
        
        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Welcher Fehler kann hier festgestellt werden?",
            image: "Bilder Elektroinstallation/bild5.jpg", // Bild-URL
            answers: ["Es wurde ein Kabel statt einer Leitung genutzt.", "Die Leiter sind zu kurz.", "Der braune und der blaue Leiter wurden vertauscht."],
            correct: [1] // Index der korrekten Antwort
        },
        
        { 
            type: "text",
            question: 'Welche der drei Sicherheitsregeln sind bei der Instandhaltung einer Schukosteckdose ausreichend?', 
            answers: ["Regeln 1, 2 und 4", "Regeln 2, 4 und 5", "Regeln 1, 2 und 3"], 
            correct: [2] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Dieser Anschluss ist ...",
            image: "Bilder Elektroinstallation/bild6.jpg", // Bild-URL
            answers: ["absolut inakzeptabel.", "super ausgeführt."],
            correct: [1] // Index der korrekten Antwort
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Welche zwei Mängel liegen vor?",
            image: "Bilder Elektroinstallation/bild7.jpg", // Bild-URL
            answers: ["Der graue Leiter ist beschädigt.", "Es wurden 3-polige statt 2-polige WAGO-Klemmen genutzt.", "Die blauen Leiter müssen mit PE unter eine Klemme."],
            correct: [0, 1] // Index der korrekten Antwort
        },

        { 
            type: "text",
            question: "Welche Verlegeart entspricht Ihrer Wechselschaltung?. Siehe hierzu den QR-Code ABB an der Pinnwand", 
            answers: ["Verlegeart C", "Verlegeart B1", "Verlegeart E"], 
            correct: [2] 
        },

        { 
            type: "text",
            question: "Wie hoch darf der maximale Bemessungsstrom Iz sein?. Siehe hierzu den QR-Code ABB, Tabelle 3", 
            answers: ["14,5 A", "23 A", "21 A"], 
            correct: [1] 
        },
        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Dieser Anschluss ist ...",
            image: "Bilder Elektroinstallation/bild8.jpg", // Bild-URL
            answers: ["super ausgeführt.", "absolut inakzeptabel."],
            correct: [0] // Index der korrekten Antwort
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Diese Arbeitsprobe ...",
            image: "Bilder Elektroinstallation/bild9.jpg", // Bild-URL
            answers: ["hat bestanden.", "ist durchgefallen."],
            correct: [1] // Index der korrekten Antwort
        },
                
        { 
            type: "text",
            question: "Welche Gefahr besteht bei fehlerhaften Verbindungen?", 
            answers: ["Der Übergangswiderstand sinkt und die Temperatur steigt - Brandgefahr!", "Der Übergangswiderstand als auch die Temperatur sinken - Brandgefahr!", "Der Übergangswiderstand als auch die Temperatur steigen - Brandgefahr!"], 
            correct: [0] 
        },
        { 
            type: "image",
            question: "Welches Schaltbild zeigt einen Serienschalter?", 
            images: ["Bilder Elektroinstallation/bild25.jpg", "Bilder Elektroinstallation/bild26.jpg", "Bilder Elektroinstallation/bild27.jpg"], 
            correct: [2] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Diese Arbeitsprobe ...",
            image: "Bilder Elektroinstallation/bild10.jpg", // Bild-URL
            answers: ["ist ne glatte 1.", "würde als Kunstwerk Abnehmer finden."],
            correct: [1] // Index der korrekten Antwort
        },

        { 
            type: "text",
            question: "Welcher IP-Code gilt mindestens z.B. für eine Steckdose im Außenbereich?", 
            answers: ["IP2X", "IP34", "IP44"], 
            correct: [2] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Diese Arbeitsprobe ...",
            image: "Bilder Elektroinstallation/bild11.jpg", // Bild-URL
            answers: ["ist eine Katastrophe.", "die Beste Arbeit überhaupt."],
            correct: [0] // Index der korrekten Antwort
        },

        { 
            type: "image",
            question: "Welches Schaltbild zeigt einen Kreuzschalter?", 
            images: ["Bilder Elektroinstallation/bild25.jpg", "Bilder Elektroinstallation/bild26.jpg", "Bilder Elektroinstallation/bild27.jpg"], 
            correct: [1] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Diese Arbeitsprobe ...",
            image: "Bilder Elektroinstallation/bild12.jpg", // Bild-URL
            answers: ["hätte bestanden, wenn nicht zu klein ausgeführt.", "wurde zu heiß gewaschen."],
            correct: [0] // Index der korrekten Antwort
        },
        
        { 
            type: "text",
            question: "Obwohl die Sicherung in Ihrem Unterverteiler (UV) deaktiviert ist, löst der RCD (FI) aus. Warum?", 
            answers: ["Es besteht eine leitende Verbindung zwischen L und N.", "Der PE hat Kontakt zu N.", "Der N hat Kontakt zu PE"], 
            correct: [1, 2] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Diese Arbeitsprobe ...",
            image: "Bilder Elektroinstallation/bild13.jpg", // Bild-URL
            answers: ["hat nichts mit der Wirklichkeit zu tun.", "hat definitiv bestanden."],
            correct: [1] // Index der korrekten Antwort
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Die Verdrahtung des Schalters ...",
            image: "Bilder Elektroinstallation/bild14.jpg", // Bild-URL
            answers: ["ist super.", "ein Chaos."],
            correct: [0] // Index der korrekten Antwort
        },

        { 
            type: "text",
            question: "Reicht eine 5-adrige Leitung aus, um am zweiten Wechselschalter ebenfalls eine Steckdose montieren zu können?", 
            answers: ["Nein, hier muss NYM-J 7x verlegt werden.", "Ja, mit der Einschränkung, dass diese ein- und ausschaltbar wäre."], 
            correct: [0, 1] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Wofür stehen die Zahlen 1,6 und 2 auf der WAGO-Klemme?",
            image: "Bilder Elektroinstallation/bild24.jpg", // Bild-URL
            answers: ["für den minimalen und maximalen Querschnitt des Leiters.", "für den minimalen und maximalen Durchmesser des Leiters.", "für die minimale und maximale Abisolierlänge des Leiters."],
            correct: [1] // Index der korrekten Antwort
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Die Verdrahtung des Schalters ...",
            image: "Bilder Elektroinstallation/bild15.jpg", // Bild-URL
            answers: ["ist meisterhaft.", "ist traurig."],
            correct: [1] // Index der korrekten Antwort
        },
                
        { 
            type: "text",
            question: "Was ist das Besondere an Schutzklasse 2?", 
            answers: ["Für SK 2 gilt eine maximale Betriebsspannung von 120 V DC.", "Bei SK 2 muss ein PE angeschlossen werden.", "SK 2 besitzt eine doppelte oder verstärkte Isolierung."], 
            correct: [2] 
        },

        {
            type: "textWithImage", // Neuer Aufgabentyp
            question: "Die Verdrahtung der Leuchte hat einen Schönheitsfehler:",
            image: "Bilder Elektroinstallation/bild16.jpg", // Bild-URL
            answers: ["der Schutzleiter ist zu lang.", "der Schutzleiter ist zu kurz."],
            correct: [1] // Index der korrekten Antwort
        },

    ],

Schützschaltung: []

};


const categoryNames = Object.keys(questions);

let currentCategory = '';
let score = 0;
let questionIndex = 0;
let categoryQuestions = [];
let selectedAnswers = [];
let multiChoiceTimer = null;
let startTime;

function disableCompletedCategories() {
    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            if (progressData.questionIndex >= questions[category].length) {
                button.disabled = true;
                button.classList.add('completed');
            }
        }
    });
}

// Fortschritt speichern
function saveProgress() {
    const progressData = {
        questionIndex: questionIndex,
        score: score,
        selectedAnswers: selectedAnswers,
    };
    localStorage.setItem(`progress_${currentCategory}`, JSON.stringify(progressData));
}

// Fortschritt laden
function loadProgress(category) {
    const savedData = localStorage.getItem(`progress_${category}`);
    if (savedData) {
        const progressData = JSON.parse(savedData);
        return progressData;
    }
    return { questionIndex: 0, score: 0, selectedAnswers: [] };
}

function loadCategory(category) {
    saveProgress(); // Den aktuellen Fortschritt speichern, bevor die Kategorie gewechselt wird

    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(btn => {
    if (!btn.classList.contains('answer-btn')) {
        btn.classList.remove('selected');
    }
});


    const selectedButton = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    currentCategory = category;
    const progress = loadProgress(category);
    score = progress.score;
    questionIndex = progress.questionIndex;
    selectedAnswers = progress.selectedAnswers || [];
    categoryQuestions = questions[category];

    document.getElementById('score-container').style.display = 'none';
    multiChoiceTimer = null;
    startTime = new Date();

    displayQuestion();
}

function calculateMedal(percentage) {
    if (percentage >= 92) return "Gold";
    if (percentage >= 81) return "Silber";
    if (percentage >= 67) return "Bronze";
    return null;
}

function getMedalImage(medal) {
    if (medal === "Gold") {
        return "Medailien/Gold.jpg";
    } else if (medal === "Silber") {
        return "Medailien/Silber.jpg";
    } else if (medal === "Bronze") {
        return "Medailien/Bronze.jpg";
    }
    return null;
}

function pointsNeededForNextMedal(percentage, totalQuestions) {
    if (percentage < 67) return Math.ceil((67 - percentage) / 100 * totalQuestions);
    if (percentage < 81) return Math.ceil((81 - percentage) / 100 * totalQuestions);
    if (percentage < 92) return Math.ceil((92 - percentage) / 100 * totalQuestions);
    return 0;
}

function calculateGrade(percentage) {
    let grade;
    if (percentage >= 100) grade = 1.0;
    else if (percentage >= 98) grade = 1.1;
    else if (percentage >= 96) grade = 1.2;
    else if (percentage >= 94) grade = 1.3;
    else if (percentage >= 92) grade = 1.4;
    else if (percentage === 91) grade = 1.5;
    else if (percentage === 90) grade = 1.6;
    else if (percentage === 89) grade = 1.7;
    else if (percentage === 88) grade = 1.8;
    else if (percentage === 87) grade = 1.9;
    else if (percentage >= 85) grade = 2.0;
    else if (percentage === 84) grade = 2.1;
    else if (percentage === 83) grade = 2.2;
    else if (percentage === 82) grade = 2.3;
    else if (percentage === 81) grade = 2.4;
    else if (percentage >= 79) grade = 2.5;
    else if (percentage === 78) grade = 2.6;
    else if (percentage === 77) grade = 2.7;
    else if (percentage >= 75) grade = 2.8;
    else if (percentage === 74) grade = 2.9;
    else if (percentage >= 72) grade = 3.0;
    else if (percentage === 71) grade = 3.1;
    else if (percentage === 70) grade = 3.2;
    else if (percentage >= 68) grade = 3.3;
    else if (percentage === 67) grade = 3.4;
    else if (percentage >= 65) grade = 3.5;
    else if (percentage >= 63) grade = 3.6;
    else if (percentage === 62) grade = 3.7;
    else if (percentage >= 60) grade = 3.8;
    else if (percentage >= 58) grade = 3.9;
    else if (percentage >= 56) grade = 4.0;
    else if (percentage >= 54) grade = 4.1;
    else if (percentage >= 53) grade = 4.2;
    else if (percentage === 51) grade = 4.3;
    else if (percentage === 50) grade = 4.4;
    else if (percentage >= 48) grade = 4.5;
    else if (percentage >= 46) grade = 4.6;
    else if (percentage >= 44) grade = 4.7;
    else if (percentage >= 42) grade = 4.8;
    else if (percentage >= 40) grade = 4.9;
    else if (percentage >= 38) grade = 5.0;
    else if (percentage >= 36) grade = 5.1;
    else if (percentage >= 34) grade = 5.2;
    else if (percentage >= 32) grade = 5.3;
    else if (percentage === 30) grade = 5.4;
    else if (percentage >= 25) grade = 5.5;
    else if (percentage >= 20) grade = 5.6;
    else if (percentage >= 15) grade = 5.7;
    else if (percentage >= 10) grade = 5.8;
    else if (percentage >= 5) grade = 5.9;
    else grade = 6.0;

    // Formatierung der Note mit einer Dezimalstelle
    return grade.toFixed(1);
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    if (questionIndex >= categoryQuestions.length) {
        displayScore();
        disableCompletedCategories();
        if (allCategoriesCompleted()) {
            showOverallResultButton();
        }
        return;
    }

    const questionData = categoryQuestions[questionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionNumber = document.createElement('div');
    questionNumber.classList.add('question-number');
    questionNumber.innerHTML = `Frage ${questionIndex + 1} von ${categoryQuestions.length}`;
    questionElement.appendChild(questionNumber);

    const questionTitle = document.createElement('h3');
    questionTitle.innerHTML = questionData.question;
    questionElement.appendChild(questionTitle);

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    if (questionData.type === 'text' || !questionData.type) {
        questionData.answers.forEach((answer, answerIndex) => {
            const answerButton = document.createElement('button');
            answerButton.innerHTML = answer;
            answerButton.classList.add('answer-btn');

            if (selectedAnswers.includes(answerIndex)) {
                answerButton.classList.add('selected');
                answerButton.disabled = true; // Bereits gewählte Antworten sind gesperrt
            }

            answerButton.onclick = function () {
                handleAnswerClick(answerIndex, answerButton);
                saveProgress(); // Fortschritt sofort nach Auswahl speichern
            };

            answersContainer.appendChild(answerButton);
        });
    } else if (questionData.type === 'image') {
        questionData.images.forEach((image, imageIndex) => {
            const imageButton = document.createElement('img');
            imageButton.src = image;
            imageButton.classList.add('answer-img'); // Diese Klasse stellt sicher, dass das Bild korrekt gestylt wird

            if (selectedAnswers.includes(imageIndex)) {
                imageButton.classList.add('selected');
                imageButton.disabled = true; // Bereits gewählte Antworten sind gesperrt
            }

            imageButton.onclick = function () {
                handleAnswerClick(imageIndex, imageButton);
                saveProgress(); // Fortschritt sofort nach Auswahl speichern
            };

            answersContainer.appendChild(imageButton);
        });
    }

    if (questionData.type === 'textWithImage') {
        const imageElement = document.createElement('img');
        imageElement.src = questionData.image;
        imageElement.classList.add('question-image');
        questionElement.appendChild(imageElement);

        questionData.answers.forEach((answer, answerIndex) => {
            const answerButton = document.createElement('button');
            answerButton.innerHTML = answer;
            answerButton.classList.add('answer-btn');

            if (selectedAnswers.includes(answerIndex)) {
                answerButton.classList.add('selected');
                answerButton.disabled = true; // Bereits gewählte Antworten sind gesperrt
            }

            answerButton.onclick = function () {
                handleAnswerClick(answerIndex, answerButton);
                saveProgress(); // Fortschritt sofort nach Auswahl speichern
            };

            answersContainer.appendChild(answerButton);
        });
    }

    questionElement.appendChild(answersContainer);
    questionContainer.appendChild(questionElement);

    const nextButton = document.createElement('button');
    nextButton.textContent = questionIndex >= categoryQuestions.length - 1 ? "Auswertung" : "Weiter";
    nextButton.classList.add('next-btn');
    nextButton.style.display = 'block';
    nextButton.style.margin = '10px auto';
    nextButton.style.padding = '10px 20px';
    nextButton.style.fontSize = '16px';
    nextButton.style.cursor = 'pointer';
    nextButton.style.width = 'auto';
    nextButton.style.maxWidth = '200px';
    nextButton.disabled = false; // Weiter-Button ist immer aktiv
    nextButton.onclick = function () {
        questionIndex++;
        selectedAnswers = [];
        questionContainer.innerHTML = '';

        if (questionIndex >= categoryQuestions.length) {
            displayScore();
            saveProgress();
            disableCompletedCategories();
            if (allCategoriesCompleted()) {
                showOverallResultButton();
            }
        } else {
            displayQuestion();
        }
    };

    questionContainer.appendChild(nextButton);

    if (selectedAnswers.length > 0 || (Array.isArray(questionData.correct) && selectedAnswers.length === questionData.correct.length)) {
        nextButton.disabled = false;
    }
}


function handleAnswerClick(answerIndex, answerButton) {
    const questionData = categoryQuestions[questionIndex];
    const nextButton = document.querySelector('.next-btn');
    if (Array.isArray(questionData.correct)) { // Mehrfachauswahl
        if (selectedAnswers.includes(answerIndex)) {
            return;
        }
        selectedAnswers.push(answerIndex);

        answerButton.classList.add('selected');

        const richtigeAntworten = questionData.correct; // Die korrekten Antworten aus dem Fragenkatalog
        const isCorrect = arraysEqualIgnoreOrder(selectedAnswers, richtigeAntworten);

        if (isCorrect) {
            score++; // Punkt hinzufügen, wenn die Antwort exakt richtig ist
        }
        nextButton.disabled = false; // Button aktivieren

    } else { // Einfachauswahl
        selectedAnswers.push(answerIndex);

        const isCorrect = selectedAnswers.length === 1 && selectedAnswers[0] === questionData.correct;
        nextButton.disabled = false; // Button aktivieren
        if (isCorrect) {
            score++; // Punkt hinzufügen, wenn die Antwort korrekt ist
        }
    }

    saveProgress();
}

function arraysEqualIgnoreOrder(a, b) {
    if (a.length !== b.length) return false;
    let sortedA = a.slice().sort();
    let sortedB = b.slice().sort();
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
    }
    return true;
}


function updateTempFeedback(message) {
    let questionContainer = document.getElementById('question-container');
    let tempFeedback = document.getElementById('temp-feedback');
    if (!tempFeedback) {
        tempFeedback = document.createElement('div');
        tempFeedback.id = 'temp-feedback';
        tempFeedback.classList.add('feedback');
        questionContainer.appendChild(tempFeedback);
    }
    tempFeedback.textContent = message;
}

function removeTempFeedback() {
    let tempFeedback = document.getElementById('temp-feedback');
    if (tempFeedback) {
        tempFeedback.remove();
    }
}

function displayScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = "";

    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score-container';
    scoreContainer.style.display = 'block';
    scoreContainer.style.position = 'relative';
    scoreContainer.style.top = '20px';
    scoreContainer.style.textAlign = 'center';

    const correctAnswers = score;
    const wrongAnswers = categoryQuestions.length - score;
    const percentage = Math.round((correctAnswers / categoryQuestions.length) * 100);
    const grade = calculateGrade(percentage);

    const chartContainer = document.createElement('div');
    chartContainer.style.width = '100%';
    chartContainer.style.maxWidth = '400px';
    chartContainer.style.margin = 'auto';
    chartContainer.style.textAlign = 'center'; // NEU: Zentriert die Balken

    if (correctAnswers > 0) {
        const correctBar = document.createElement('div');
        correctBar.style.height = '30px';
        correctBar.style.width = '100%'; // Feste Breite
        correctBar.style.backgroundColor = '#4caf50';
        correctBar.style.color = 'white';
        correctBar.style.lineHeight = '30px';
        correctBar.style.margin = '5px auto';
        correctBar.style.borderRadius = '10px'; // Ecken abrunden
        correctBar.style.fontSize = '18px'; /* Schriftgröße anpassen */
        correctBar.textContent = `Richtig: ${correctAnswers}`;
        chartContainer.appendChild(correctBar);
    }

    if (wrongAnswers > 0) {
        const wrongBar = document.createElement('div');
        wrongBar.style.height = '30px';
        wrongBar.style.width = '100%'; // Feste Breite
        wrongBar.style.backgroundColor = '#f44336';
        wrongBar.style.color = 'white';
        wrongBar.style.lineHeight = '30px';
        wrongBar.style.margin = '5px auto';
        wrongBar.style.borderRadius = '10px'; // Ecken abrunden
        wrongBar.style.fontSize = '18px'; /* Schriftgröße anpassen */
        wrongBar.textContent = `Falsch: ${wrongAnswers}`;
        chartContainer.appendChild(wrongBar);
    }

    const percentageText = document.createElement('p');
    percentageText.textContent = `Erfolgsquote: ${percentage}%`;
    scoreContainer.appendChild(chartContainer);
    scoreContainer.appendChild(percentageText);

    const gradeText = document.createElement('p');
    gradeText.textContent = `Note: ${grade}`;
    scoreContainer.appendChild(gradeText);

    const medal = calculateMedal(percentage);
    let medalText = '';
    if (medal) {
        if (medal === 'Gold') {
            medalText = 'Glückwunsch. <br>Gold für Dich !';
        } else if (medal === 'Silber') {
            medalText = 'Glückwunsch. <br>Silber für Dich !';
        } else if (medal === 'Bronze') {
            medalText = 'Glückwunsch. <br>Bronze für Dich !';
        }

        const medalElement = document.createElement('p');
        medalElement.innerHTML = medalText; // Verwende innerHTML statt textContent
        medalElement.classList.add('medal-text'); // Füge die CSS-Klasse hinzu
        medalElement.style.fontSize = '18px';
        medalElement.style.fontWeight = 'bold';
        medalElement.style.color = medal === 'Bronze' ? '#cd7f32' :
                                   (medal === 'Silber' ? '#c0c0c0' : '#ffd700');

        const medalImage = document.createElement('img');
        medalImage.src = getMedalImage(medal);
        medalImage.classList.add('medal-image', 'dynamic'); // Fügt 'dynamic' hinzu

        scoreContainer.appendChild(medalElement);
        scoreContainer.appendChild(medalImage);
    } else {
        // Änderung: Hier wird die Anzahl der fehlenden richtigen Antworten angezeigt
        const missingPoints = pointsNeededForNextMedal(percentage, categoryQuestions.length);
        const missingPointsText = document.createElement('p');
        if (missingPoints === 1) {
            missingPointsText.textContent = `Du hast keine Medaille erhalten. Dir fehlt noch ${missingPoints} richtige Antwort, um eine Medaille zu erhalten.`;
        } else {
            missingPointsText.textContent = `Du hast keine Medaille erhalten. Dir fehlen noch ${missingPoints} richtige Antworten, um eine Medaille zu erhalten.`;
        }
        scoreContainer.appendChild(missingPointsText);
    }

    questionContainer.appendChild(scoreContainer);

    if (allCategoriesCompleted()) {
        showOverallResultButton();
    }
}

function displayOverallScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = "";

    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');

    let totalCorrectAnswers = 0;
    let totalQuestions = 0;

    categoryNames.forEach(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            totalCorrectAnswers += progressData.score;
            totalQuestions += questions[category].length;

            const correctAnswers = progressData.score;
            const wrongAnswers = questions[category].length - correctAnswers;
            const percentage = Math.round((correctAnswers / questions[category].length) * 100);
            const grade = calculateGrade(percentage);

            const categoryResult = document.createElement('div');
            categoryResult.classList.add('category-result');
            categoryResult.style.margin = '20px 0'; // Mehr Abstand zwischen den Blöcken
            categoryResult.style.border = '2px solid #ccc'; // Grauer Rahmen
            categoryResult.style.padding = '15px'; // Innenabstand
            categoryResult.style.borderRadius = '10px'; // Abgerundete Ecken
            categoryResult.style.backgroundColor = '#f9f9f9'; // Heller Hintergrund

            const scoreTitle = document.createElement('h3');
            scoreTitle.classList.add('result-title');
            scoreTitle.textContent = `Ergebnis aus Kategorie ${category}:`;
            categoryResult.appendChild(scoreTitle);

            const chartContainer = document.createElement('div');
            chartContainer.style.width = '100%';
            chartContainer.style.maxWidth = '400px';
            chartContainer.style.margin = 'auto';
            chartContainer.style.display = 'flex';
            chartContainer.style.flexDirection = 'column';
            chartContainer.style.alignItems = 'center';

            if (correctAnswers > 0) {
                const correctBar = document.createElement('div');
                correctBar.style.height = '30px';
                correctBar.style.width = percentage + '%';
                correctBar.style.backgroundColor = '#4caf50';
                correctBar.style.color = 'white';
                correctBar.style.lineHeight = '30px';
                correctBar.textContent = `Richtig: ${correctAnswers}`;
                chartContainer.appendChild(correctBar);
            }

            if (wrongAnswers > 0) {
                const wrongBar = document.createElement('div');
                wrongBar.style.height = '30px';
                wrongBar.style.width = (100 - percentage) + '%';
                wrongBar.style.backgroundColor = '#f44336';
                wrongBar.style.color = 'white';
                wrongBar.style.lineHeight = '30px';
                wrongBar.textContent = `Falsch: ${wrongAnswers}`;
                chartContainer.appendChild(wrongBar);
            }

            const percentageText = document.createElement('p');
            percentageText.textContent = `Erfolgsquote: ${percentage}%`;
            categoryResult.appendChild(chartContainer);
            categoryResult.appendChild(percentageText);

            const gradeText = document.createElement('p');
            gradeText.textContent = `Note: ${grade}`;
            categoryResult.appendChild(gradeText);

            const medal = calculateMedal(percentage);
            let medalText = '';
            if (medal) {
                if (medal === 'Gold') {
                    medalText = 'Glückwunsch. <br>Gold für Dich !';
                } else if (medal === 'Silber') {
                    medalText = 'Glückwunsch. <br>Silber für Dich !';
                } else if (medal === 'Bronze') {
                    medalText = 'Glückwunsch. <br>Bronze für Dich !';
                }

                const medalElement = document.createElement('p');
                medalElement.innerHTML = medalText; // Verwende innerHTML statt textContent
                medalElement.style.fontSize = '18px';
                medalElement.style.fontWeight = 'bold';
                medalElement.style.color = medal === 'Bronze' ? '#cd7f32' :
                                           (medal === 'Silber' ? '#c0c0c0' : '#ffd700');

                const medalImage = document.createElement('img');
                medalImage.src = getMedalImage(medal);
                medalImage.classList.add('medal-image');
                categoryResult.appendChild(medalElement);
                categoryResult.appendChild(medalImage);
            } else {
                // Änderung: Hier wird die Anzahl der fehlenden richtigen Antworten angezeigt
                const missingPoints = pointsNeededForNextMedal(percentage, questions[category].length);
                const missingPointsText = document.createElement('p');
                if (missingPoints === 1) {
                    missingPointsText.textContent = `Du hast keine Medaille erhalten. Dir fehlt noch ${missingPoints} richtige Antwort, um eine Medaille zu erhalten.`;
                } else {
                    missingPointsText.textContent = `Du hast keine Medaille erhalten. Dir fehlen noch ${missingPoints} richtige Antworten, um eine Medaille zu erhalten.`;
                }
                categoryResult.appendChild(missingPointsText);
            }

            resultsContainer.appendChild(categoryResult);
            resultsContainer.style.textAlign = "center";
            resultsContainer.style.display = "flex";
            resultsContainer.style.flexDirection = "column";
            resultsContainer.style.alignItems = "center";
        }
    });

    const totalPercentage = Math.round((totalCorrectAnswers / totalQuestions) * 100);
    const overallMedal = calculateMedal(totalPercentage);
    const overallGrade = calculateGrade(totalPercentage);

    const totalResult = document.createElement('div');
    totalResult.classList.add('category-result');

    const totalScoreTitle = document.createElement('h3');
    totalScoreTitle.classList.add('result-title');
    totalScoreTitle.textContent = 'Gesamtergebnis';
    totalResult.appendChild(totalScoreTitle);

    const totalScoreText = document.createElement('p');
    totalScoreText.textContent = `Gesamtergebnis: ${totalCorrectAnswers} von ${totalQuestions} Fragen richtig beantwortet. (${totalPercentage}%)`;
    totalResult.appendChild(totalScoreText);

    const totalGradeText = document.createElement('p');
    totalGradeText.textContent = `Gesamtnote: ${overallGrade}`;
    totalResult.appendChild(totalGradeText);

    if (overallMedal) {
        let overallMedalText = '';
        if (overallMedal === 'Gold') {
            overallMedalText = 'Glückwunsch. <br>Gold für Dich !';
        } else if (overallMedal === 'Silber') {
            overallMedalText = 'Glückwunsch. <br>Silber für Dich !';
        } else if (overallMedal === 'Bronze') {
            overallMedalText = 'Glückwunsch. <br>Bronze für Dich !';
        }

        const overallMedalElement = document.createElement('p');
        overallMedalElement.innerHTML = overallMedalText; // Verwende innerHTML statt textContent
        overallMedalElement.style.fontSize = '18px';
        overallMedalElement.style.fontWeight = 'bold';
        overallMedalElement.style.color = overallMedal === 'Bronze' ? '#cd7f32' :
                                          (overallMedal === 'Silber' ? '#c0c0c0' : '#ffd700');

        const overallMedalImage = document.createElement('img');
        overallMedalImage.src = getMedalImage(overallMedal);
        overallMedalImage.classList.add('medal-image', 'static');
        totalResult.appendChild(overallMedalElement);
        totalResult.appendChild(overallMedalImage);
    } else {
        // Änderung: Hier wird die Anzahl der fehlenden richtigen Antworten für das Gesamtergebnis angezeigt
        const missingPoints = pointsNeededForNextMedal(totalPercentage, totalQuestions);
        const missingPointsText = document.createElement('p');
        if (missingPoints === 1) {
            missingPointsText.textContent = `Du hast keine Medaille erhalten. Dir fehlt noch ${missingPoints} richtige Antwort, um eine Medaille zu erhalten.`;
        } else {
            missingPointsText.textContent = `Du hast keine Medaille erhalten. Dir fehlen noch ${missingPoints} richtige Antworten, um eine Medaille zu erhalten.`;
        }
        totalResult.appendChild(missingPointsText);
    }

    resultsContainer.appendChild(totalResult);
    questionContainer.appendChild(resultsContainer);
}

function showOverallResultButton() {
    const questionContainer = document.getElementById('question-container');
    if (!document.getElementById('overall-result-btn')) {
        const overallResultButton = document.createElement('button');
        overallResultButton.textContent = "Gesamtergebnis";
        overallResultButton.id = "overall-result-btn";
        overallResultButton.classList.add('overall-result-btn');
        overallResultButton.style.display = 'block';
        overallResultButton.style.margin = '20px auto';
        overallResultButton.style.padding = '10px 20px';
        overallResultButton.style.fontSize = '16px';
        overallResultButton.style.cursor = 'pointer';
        overallResultButton.style.width = 'auto'; // Breite anpassen
        overallResultButton.style.maxWidth = '200px'; // Maximalbreite für bessere Darstellung
        overallResultButton.onclick = displayOverallScore;
        questionContainer.appendChild(overallResultButton);
    }
}

function allCategoriesCompleted() {
    return categoryNames.every(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            return progressData.questionIndex >= questions[category].length;
        }
        return false;
    });
}

function shuffleCategories() {
    for (let i = categoryNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [categoryNames[i], categoryNames[j]] = [categoryNames[j], categoryNames[i]];
    }
}

function checkAllCategoriesCompleted() {
    let allCompleted = allCategoriesCompleted();
    if (allCompleted) {
        showResetButton();
    }
    disableCompletedCategories();
}


function confirmCategorySwitch(newCategory) {
    if (questionIndex === 0 || questionIndex >= categoryQuestions.length) {
        loadCategory(newCategory);
        return;
    }
    saveProgress(); // Aktualisierung hinzufügen, um Fortschritt zu speichern
    const progressPercentage = Math.round((questionIndex / categoryQuestions.length) * 100);
    const scorePercentage = questionIndex > 0 ? Math.round((score / questionIndex) * 100) : 0;
    const confirmationMessage = `Du hast ${progressPercentage}% der Aufgaben bearbeitet und bis jetzt ein Ergebnis von ${scorePercentage}% erreicht.\n\nMöchtest du wirklich die Kategorie wechseln?`;

    if (confirm(confirmationMessage)) {
        loadCategory(newCategory);
    }
}


function loadCategories() {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';
    categoryNames.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category-btn');
        categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryButton.setAttribute('data-category', category);
        categoryButton.onclick = () => confirmCategorySwitch(category);
        categoryContainer.appendChild(categoryButton);
    });
}

function berechneErgebnis() {
    let richtigeFragen = 0;
    let gesamtFragen = questions.length; // Anzahl aller Fragen

    questions.forEach((frage, index) => {
        let ausgewaehlteAntworten = getUserSelectedAnswers(index); // Holt die gewählten Antworten
        let richtigeAntworten = frage.correct; // Holt die korrekten Antworten aus dem Fragenkatalog

        // Überprüfe, ob genau die richtigen Antworten gewählt wurden
        if (arraysSindGleich(ausgewaehlteAntworten, richtigeAntworten)) {
            richtigeFragen++;
        }
    });

    let prozentErgebnis = (richtigeFragen / gesamtFragen) * 100;
    zeigeErgebnis(prozentErgebnis); // Funktion, die das Ergebnis anzeigt
}

function arraysSindGleich(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const sortedArr1 = arr1.slice().sort((a, b) => a - b);
    const sortedArr2 = arr2.slice().sort((a, b) => a - b);
    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}


// Hilfsfunktion: Holt die vom Benutzer gewählten Antworten einer Frage
function getUserSelectedAnswers(index) {
    let ausgewaehlteAntworten = [];
    document.querySelectorAll(`#question-${index} .selected`).forEach(button => {
        ausgewaehlteAntworten.push(parseInt(button.dataset.index)); // Antwort-Index speichern
    });
    return ausgewaehlteAntworten;
}

window.onload = function() {
    localStorage.clear(); // Löscht den Fortschritt beim Neuladen des Browsers
    loadCategories();
};
