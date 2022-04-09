import { Injectable } from '@angular/core';

interface QuizFromWeb {
  name: string;
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

    const quizzesFromWeb: QuizFromWeb[] = [
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
