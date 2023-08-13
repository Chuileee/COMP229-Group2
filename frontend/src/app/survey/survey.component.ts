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
  questions: { text: string; questiontype: string; options?: string[] }[] = [];
  startDate: string = ''; // Add this property
  endDate: string = '';   // Add this property

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
