import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  loadQuizzes = () => {

    const quizzesFromWeb: any[] = [
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
        , questions: [
          {
            name: 'Question 1'
          }
          , {
            name: 'Question 2'
          }
          , {
            name: 'Question 3'
          }
          , {
            name: 'Question 4'
          }
          , {
            name: 'Question 5'
          }
        ]
      }
    ];

    return quizzesFromWeb;
  };
}
