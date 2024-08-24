// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to check the quiz answers and display the result
function checkQuiz() {
    const correctAnswers = {
        q1: "1", // الجسم يبقى على حالته من السكون أو الحركة ما لم تؤثر عليه قوة خارجية.
        q2: "2", // الأمواج المستعرضة.
        q3: "2"  // الجاذبية.
    };

    let score = 0;

    for (let question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    const resultText = `لقد أجبت على ${score} من 3 إجابات صحيحة!`;
    document.getElementById('quiz-result').innerText = resultText;

    if (score === 3) {
        alert("ممتاز! لقد أجبت على جميع الأسئلة بشكل صحيح.");
    } else {
        alert("حاول مرة أخرى لتحسين درجاتك.");
    }
}

// Section click event to show an alert with more information (you already had this)
document.querySelectorAll('.content').forEach(section => {
    section.addEventListener('click', () => {
        const sectionTitle = section.querySelector('h2').innerText;
    });
});
