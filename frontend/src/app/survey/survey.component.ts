import { Component } from '@angular/core';
import { Survey, Question } from './survey.model';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  survey: Survey = {
    _id: '',  
    surveyName: '',
    questions: [],
    startDate: '',
    endDate: ''
  };

  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit() {
    this.addQuestion();
  }

  addQuestion() {
    const newQuestion: Question = {
      text: '',
      questiontype: 'multipleChoice',
      options: [],
      optionsString: ''
    }
    this.survey.questions.push(newQuestion);
  }
  
  deleteQuestion(index: number) {
    this.survey.questions.splice(index, 1);
  }
  


  // Convert comma-separated string to options array
  setOptionsFromString(optionString: string): string[] {
    return optionString.split(',').map(option => option.trim());
  }

  // Create and save the survey
  createSurvey() {
    this.survey.questions.forEach(question => {
      if (question.questiontype === 'multipleChoice' && question.optionsString) {
        question.options = this.setOptionsFromString(question.optionsString);
      }
    });

    const newSurvey: Survey = {
      _id: '',
      surveyName: this.survey.surveyName,
      questions: this.survey.questions,
      startDate: this.survey.startDate,
      endDate: this.survey.endDate
    };

    this.surveyService.saveSurvey(newSurvey).subscribe(
      response => {
        console.log('Survey saved:', response);
        this.router.navigateByUrl('/survey-list');  // Navigate after saving.
      },
      error => {
        console.error('Error saving survey:', error);
      }
    );
  }
}
