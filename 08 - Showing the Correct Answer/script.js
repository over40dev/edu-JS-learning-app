let questions = [
    {
      title: 'gato',
      alternatives: ['dog', 'cat', 'bird', 'fish'],
      correctAnswer: 1
    },
    {
      title: 'ave',
      alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
      correctAnswer: 3
    },
    {
      title: 'rata',
      alternatives: ['cat', 'fish', 'rat', 'shark'],
      correctAnswer: 2
    },
    {
      title: 'mosca',
      alternatives: ['fly', 'puma', 'fish', 'dog'],
      correctAnswer: 0
    }
  ];
  
  
  let app = {
    start: function () {
  
      this.currPosition = 0;
      this.score = 0;
  
      // get alternatives
      let alts = document.querySelectorAll('.alternative');
  
      alts.forEach((element, index) => {
  
        element.addEventListener('click', () => {
          // check correct answer
          this.checkAnswer(index);
        });
      });
  
      // refresh stats
      this.updateStats();
  
      // show first question
      this.showQuestion(questions[this.currPosition]);
    },
  
    showQuestion: function (q) {
  
      // show question title
      let titleDiv = document.getElementById('title');
      titleDiv.textContent = q.title;
  
      // show alternatives
      let alts = document.querySelectorAll('.alternative');
  
      alts.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
      });
    },
  
    checkAnswer: function (userSelected) {
      // existing code
      let currQuestion = questions[this.currPosition];
  
      // modified code
      if (currQuestion.correctAnswer == userSelected) {
        // existing code
        console.log('correct');
        this.score++;
        // new code
        this.showResult(true);
      }
      else {
        // existing code
        console.log('wrong');
        // new code
        this.showResult(false);
      }
  
      // existing code
      this.updateStats();
  
      // existing code
      this.increasePosition();
  
      // existing code
      this.showQuestion(questions[this.currPosition]);
    },
  
    increasePosition: function () {
      this.currPosition++;
  
      if (this.currPosition == questions.length) {
        this.currPosition = 0;
      }
    },
  
    updateStats: function () {
      // show score on web page
      let scoreDiv = document.getElementById('score');
      scoreDiv.textContent = `Your score: ${this.score}`;
    },
  
    showResult: function (isCorrect) {
      let resultDiv = document.getElementById('result');
      let result = '';
  
      // checks
      if (isCorrect) {
        result = 'Correct Answer!';
      }
      else {
        // get the current question
        let currQuestion = questions[this.currPosition];
  
        // get correct answer (index)
        let correctAnswIndex = currQuestion.correctAnswer;
  
        // get correct answer (text)
        let correctAnswText = currQuestion.alternatives[correctAnswIndex];
  
        result = `Wrong! Correct answer: ${correctAnswText}`;
      }
  
      // show result text on web page
      resultDiv.textContent = result;
    }
  };
  
  app.start();
  