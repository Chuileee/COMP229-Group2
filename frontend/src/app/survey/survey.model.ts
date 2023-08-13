export interface Question {
    text: string;
    questiontype: 'multipleChoice' | 'agreeDisagree';
    options: string[];
    optionsString: string;
  }
  
  export interface Survey {
    _id: string;
    surveyName: string;
    questions: Question[];//questions: any[]; //Consider creating a Question model for better type safety
    startDate: string;
    endDate: string;
  }
  