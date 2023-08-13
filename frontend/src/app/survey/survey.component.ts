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
    surveyName: '',
    questions: [],
    startDate: '',
    endDate: ''
  };

  ngOnInit() {
    this.addQuestion();
  }

  addQuestion() {
    this.survey.questions.push({ text: '', questiontype: 'multipleChoice', options: ['', '', '', ''] });
  }

  constructor(private surveyService: SurveyService, private router: Router) {}

  createSurvey() {
    const newSurvey: Survey = {
      surveyName: this.survey.surveyName,
      questions: this.survey.questions,
      startDate: this.survey.startDate,
      endDate: this.survey.endDate 
  
};
this.surveyService.saveSurvey(newSurvey).subscribe(
  response => {
    // Handle the response from the server here. For instance:
    console.log('Survey saved:', response);
    this.router.navigateByUrl('/survey-list');  // Navigate after saving.
  },
  error => {
    // Handle errors here
    console.error('Error saving survey:', error);
  }
);
}
}
