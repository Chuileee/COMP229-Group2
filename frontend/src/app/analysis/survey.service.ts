import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:4000';
  private surveyEndpoint = '/surveys'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to fetch survey data by ID
  getSurveyById(surveyId: string): Observable<any> {
    const url = `${this.apiUrl}/surveys/${surveyId}`;
    return this.http.get(url);
  }

  // Method to get survey response statistics
  getSurveyStatistics(surveyId: string): Observable<any> {
    const url = `${this.apiUrl}/surveys/${surveyId}/statistics`;
    return this.http.get(url);
  }

  // Method to export survey statistics
  exportSurveyStatisticsToExcel(surveyId: string): Observable<any> {
    const url = `${this.apiUrl}/surveys/${surveyId}/export/excel`;
    return this.http.get(url, { responseType: 'blob' });
  }

  getAllSurveys(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${this.surveyEndpoint}`);
  }
}
