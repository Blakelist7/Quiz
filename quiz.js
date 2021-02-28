(function(){

  function buildQuiz(){

    const output = [];


    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
      answers: {
        a: "2",
        b: "1",
        c: "0",
        d: "5"
      },
      correctAnswer: "a"
    },
    {
        question: "What is the derivative of Acceleration with respect to time?",
            answers: {
                a: "Shift",
                b: "Bump",
                c: "Slide",
                d: "Jerk"

      },
      correctAnswer: "d"
    },
    {
      question: "The Red Hot Chili Pepper song &quot;Give It Away&quot; is from what album?",
      answers: {
        a: "Blood Sugar Sex Magik",
        b: "One Hot Minute",
        c: "Stadium Arcadium",
        d: "By the Way"
      },
      correctAnswer: "a"
    },
    {
        question: "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
        answers: {
            a: "USS North Carolina",
            b: "USS Pueblo",
            c: "USS Constitution",
            d: "USS Indianapolis"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of these chemical compounds is NOT found in gastric acid?",
        answers: {
            a: "Hydrochloric acid",
            b: "Sodium chloride",
            c: "Sulfuric acid",
            d: "Potassium chloride"
        },
        correctAnswer: "c"
    },
    {
        question: "Which modern day country is the region that was known as Phrygia in ancient times?",
        answers: {
            a: "Egypt",
            b: "Greece",
            c: "Syria",
            d: "Turkey"
        },
        correctAnswer: "d"
    },
    {
        question: "When was Nintendo founded?",
        answers: {
            a: "September 23rd, 1889",
            b: "October 19th, 1891",
            c: "March 4th, 1887",
            d: "December 27th, 1894"
        },
        correctAnswer: "a"
    },
    {
        question: "What caused the titular mascot of Yo-Kai Watch, Jibanyan, to become a yokai?",
        answers: {
            a: "Ate one too many chocobars",
            b: "Being run over by a truck",
            c: "Through a magical ritual",
            d: "When he put on the harmaki"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the weight of a Gold Bar in Fallout: New Vegas?",
        answers: {
            a: "40 Pounds",
            b: "30 Pounds",
            c: "35 Pounds",
            d: "32.50 Pounds"
        },
        correctAnswer: "c"
    },
    {
        question: "Why were only only 300,000 copies of Uniracers were produced?",
        answers: {
            a: "There was a disagreement between DMA Designs and Nintendo",
            b: "It didn&#039;t sell well due to poor review scores",
            c: "No public information is available",
            d: "DMA Designs was sued by Pixar, preventing more copies from being produced"
        },
        correctAnswer: "d"
    }
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();