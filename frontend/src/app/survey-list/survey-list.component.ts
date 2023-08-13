import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Survey } from '../survey/survey.model';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyService.getAllSurveys().subscribe(data => {
      this.surveys = data;
    }, error => {
      console.error("Error fetching surveys: ", error);
    });
  }

  // Adding the respondToSurvey method:
  respondToSurvey(survey: Survey) {
    alert('Responding to: ' + survey.surveyName);
}

    // Here, you can implement any functionality you desire.
    // For instance, navigate to another component, open a modal, etc.
  
}
