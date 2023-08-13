import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';  // Update with the actual path
import { Survey } from '../survey/survey.model';  // Adjust the path to your Survey model

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
}
