import { Component, OnInit} from '@angular/core';
import { QuizService } from './quiz.service';

interface QuizDisplay {
  quizName: string;
  quizQuestions: QuestionDisplay[];  
}

interface QuestionDisplay {
  questionName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quiz-editor';

  constructor(
    public quizSVC: QuizService
  ) {    
  }

  ngOnInit() {
     const quizzes = this.quizSVC.loadQuizzes();     
     this.quizzes = quizzes.map(x => ({
      quizName: x.name, quizQuestions: x.questions.map((y: any) => ({
        questionName: y.name
      }))
     }));
  }

  quizzes: QuizDisplay[] = [];

  selectedQuiz: QuizDisplay | undefined = undefined;

  selectQuiz = (q: QuizDisplay) => {
    this.selectedQuiz = q;
    //console.log(this.selectedQuiz);
  };

  addNewQuiz = () => {
    
    const q = {
      quizName: "Andrews New Quiz"
      , quizQuestions: []
    };
   
    this.quizzes = [
      ...this.quizzes
      , q
    ];

    this.selectedQuiz = q;
  }
}


