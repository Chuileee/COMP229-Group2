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
  const endpoint = `${this.baseUrl}/survey`;
  // Use the HTTP client to send the survey data as a POST request to your backend server
  return this.http.post(endpoint, survey);
}

  // Fetch a specific survey by its _id
  getSurveyById(id: string): Observable<Survey> {
    const endpoint = `${this.baseUrl}/survey/${id}`;
    return this.http.get<Survey>(endpoint);
  }

  getAllSurveys(): Observable<any[]> {
    const endpoint = `${this.baseUrl}/allSurveys`; // Use the correct endpoint URL
    return this.http.get<any[]>(endpoint); // Use the 'endpoint' variable
  }
}
