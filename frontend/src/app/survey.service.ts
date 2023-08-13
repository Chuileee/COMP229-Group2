import { Injectable } from '@angular/core';
import { Survey } from './survey/survey.model';  // Adjust the path to your Survey model

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveys: Survey[] = [];  // This array will act as our database for surveys for this example

  constructor() {}

  // Save a survey
  saveSurvey(survey: Survey) {
    this.surveys.push(survey);
  }

  // Get all surveys
  getAllSurveys(): Survey[] {
    return this.surveys;
  }
}
