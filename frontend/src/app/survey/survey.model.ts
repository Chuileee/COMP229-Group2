export interface Question {
    text: string;
    questiontype: 'multipleChoice' | 'agreeDisagree';
    options: string[];
    optionsString: string;
  }
  
  export interface Survey {
    surveyName: string;
    questions: Question[];
    startDate: string;
    endDate: string;
  }
  