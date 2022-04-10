import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

interface quizDisplay {
  quizName: String;
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
    public quizSvc: QuizService
    ){
  }
  ngOnInit(): void {
      const quizzes = this.quizSvc.loadQuizzes();
      console.log(quizzes);
      this.quizzes = quizzes.map(x =>({
        quizName: x.quizName
        , quizQuestions: x.questions.map((y:any) =>({
          questionName: y.name
        }))
    }));

    console.log(this.quizzes);
  }
  quizzes: quizDisplay[] = [];
}
