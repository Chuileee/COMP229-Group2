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
    this.surveyService.getAllSurveys().subscribe(
      (data: Survey[]) => {
        this.surveys = data;
      },
      (error: any) => {
        console.error('Error fetching surveys:', error);
      });
  }

  respondToSurvey(survey: Survey) {
    this.router.navigate(['/respond', survey._id]); // Assuming your survey object has an 'id' field
  }
}
