import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service'; // Check the correct path here

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  surveyData: { survey: any; numberOfRespondents: number }[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.surveyService.getAllSurveys().subscribe(
      (surveys: any[]) => {
        this.surveyData = surveys.map(survey => ({
          survey: survey,
          numberOfRespondents: 0
        }));
      },
      (error: any) => {
        console.error('Error fetching surveys:', error);
      }
    );
  }

  updateNumberOfRespondents(responseCounter: number, surveyIndex: number): void {
    this.surveyData[surveyIndex].numberOfRespondents = responseCounter;
  }
  

  exportToExcel() {
    // Implement export to Excel using xlsx or other libraries
  }

  exportViaEmail() {
    // Implement export via email using email service or default client
  }
}
