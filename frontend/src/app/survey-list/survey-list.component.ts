import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Survey } from '../survey/survey.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {
    this.surveyService.getAllSurveys().subscribe(data => {
      this.surveys = data;
    }, error => {
      console.error("Error fetching surveys: ", error);
    });
  }

  // Adding the respondToSurvey method:
  respondToSurvey(survey: Survey) {
    this.router.navigate(['/respond', survey._id]);  // Assuming your survey object has an 'id' field
  }
  

    // Here, you can implement any functionality you desire.
    // For instance, navigate to another component, open a modal, etc.
  
}
