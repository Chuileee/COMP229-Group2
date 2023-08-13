import { Injectable } from '@angular/core';
import { Survey } from './survey/survey.model';  // Adjust the path to your Survey model
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
  saveSurvey(survey: Survey): Observable<any> {
    const endpoint = `${this.baseUrl}/saveSurvey`;
    return this.http.post(endpoint, survey);
  }

  // Fetch all surveys from the backend
  getAllSurveys(): Observable<Survey[]> {
    const endpoint = `${this.baseUrl}/allSurveys`;
    return this.http.get<Survey[]>(endpoint);
  }
  }
