import { Component } from '@angular/core';
import { Survey, Question } from './survey.model';  // Import the models (adjust path if necessary)
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';  // Update with the actual path

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements Survey {
  surveyName: string = '';
  questions: Question[] = [];
  startDate: string = '';
  endDate: string = '';

  ngOnInit() {
    this.addQuestion();
  }

  addQuestion() {
    this.questions.push({ text: '', questiontype: 'multipleChoice', options: ['', '', '', ''] });
  }

  constructor(private surveyService: SurveyService, private router: Router) {}
  createSurvey() {
    const newSurvey: Survey = {
      surveyName: this.surveyName,
      questions: this.questions,
      startDate: this.startDate,
      endDate: this.endDate
    }
    this.surveyService.saveSurvey(newSurvey);  // Save the survey using the service
    console.log('Survey saved:', newSurvey);
    this.router.navigateByUrl('/survey-list');  // Navigate to the survey list after saving.
  }
  
  
}
