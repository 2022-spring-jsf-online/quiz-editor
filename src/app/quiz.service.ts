import { Injectable } from '@angular/core';
interface quizFromWeb {
  name:string;
  questions: {
    name: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  loadQuizzes = () => {

    const quizzesFromWeb: quizFromWeb[] = [
      {
        name: 'Quiz 1'
        , questions: [
          {
            name: 'Question 1'
          }
          , {
            name: 'Question 2'
          }
        ]
      }
      , {
        name: 'Quiz 2'
        , questions: []
      }
    ];

    return quizzesFromWeb;
  };
}
