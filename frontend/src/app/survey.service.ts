import { Injectable } from '@angular/core';
import { Survey } from './survey/survey.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';  // Add 'of' import here
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  // Endpoint base URL
  private baseUrl: string = 'http://localhost:4000';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Save a survey
  saveSurvey(survey: Survey) {
    const endpoint = `${this.baseUrl}/survey`;
    return this.http.post(endpoint, survey);
  }

  // Fetch a specific survey by its _id
  getSurveyById(id: string): Observable<Survey> {
    const endpoint = `${this.baseUrl}/survey/${id}`;
    return this.http.get<Survey>(endpoint);
  }

  // Fetch all surveys
  getAllSurveys(): Observable<any[]> {
    const endpoint = `${this.baseUrl}/allSurveys`;
    return this.http.get<any[]>(endpoint);
  }

  // Submit a survey response
  submitSurveyResponse(surveyId: string, response: any): Observable<any> {
    const endpoint = `${this.baseUrl}/submitResponse`;
    const payload = {
      surveyId: surveyId,
      responses: response
    };
    return this.http.post(endpoint, payload);
  }

  // Fetch surveys created by the currently logged-in user
  getMySurveys(): Observable<any> {
    const userEmail = this.authService.getEmail();
    if (userEmail) {
      return this.http.get(`${this.baseUrl}/my-Surveys`);
    } else {
        return of([]);  // Return an empty array if there's no logged-in user
    }
  }
}
