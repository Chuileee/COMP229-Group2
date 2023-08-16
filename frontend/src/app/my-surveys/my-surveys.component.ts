import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service'; // Adjust the path to where your service is located

@Component({
  selector: 'app-mysurveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.css']
})
export class MySurveysComponent implements OnInit {

  surveys: any[] = [];

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.fetchMySurveys();
  }

  fetchMySurveys() {
    this.surveyService.getMySurveys()  // Implement this method in your service
      .subscribe(data => {
        this.surveys = data;
      }, error => {
        console.error("Error fetching user's surveys:", error);
      });
  }

}
