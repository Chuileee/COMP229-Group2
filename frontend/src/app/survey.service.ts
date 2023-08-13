import { Injectable } from '@angular/core';
import { Survey } from './survey/survey.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) {}

  // Endpoint base URL
  private baseUrl: string = 'http://localhost:4000';

  // Save a survey
  saveSurvey(survey: Survey) {
    // Endpoint where your backend server is running
    const endpoint = 'http://localhost:4000/saveSurvey';
    // Use the HTTP client to send the survey data as a POST request to your backend server
    return this.http.post(endpoint, survey);
}

  // Fetch all surveys from the backend
  getAllSurveys(): Observable<Survey[]> {
    const endpoint = `${this.baseUrl}/allSurveys`;
    return this.http.get<Survey[]>(endpoint);
  }
}
