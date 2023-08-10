import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service'; // Check the correct path here

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  numberOfRespondents: number = 0; // Initialize with a default value
  questions: any[] = []; // Initialize with an empty array

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    // Fetch analysis data for a specific survey using surveyService
    // For example:
    const surveyId = 'your-survey-id';
    this.surveyService.getSurveyStatistics(surveyId).subscribe(
      (statistics: any) => {
        this.numberOfRespondents = statistics.numberOfRespondents;
        this.questions = statistics.questions;
      },
      (error: any) => {
        console.error('Error fetching analysis data:', error);
      }
    );
  }

  exportToExcel() {
    // Implement export to Excel using xlsx or other libraries
  }

  exportViaEmail() {
    // Implement export via email using email service or default client
  }
}
