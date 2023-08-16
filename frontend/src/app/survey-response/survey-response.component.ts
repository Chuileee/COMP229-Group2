import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../survey/survey.model';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.css']
})
export class SurveyResponseComponent implements OnInit {
  @Input() survey: Survey | null = null;
  responses: any = {};
  responseCounter: number = 0;

  responseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private fb: FormBuilder
  ) {
    this.responseForm = this.fb.group({});  // initialize the form group here
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchSurveyById(id);
    }
  }

  private fetchSurveyById(id: string): void {
    this.surveyService.getSurveyById(id)
      .pipe(
        tap(data => this.handleSurveyFetchSuccess(data, id)),
        catchError(error => {
          console.error("Error fetching survey: ", error);
          alert('Failed to fetch survey. Please try again.');
          return of(null);  // Return an observable to keep the stream alive
        })
      )
      .subscribe();
  }

  private handleSurveyFetchSuccess(data: Survey, id: string): void {
    this.survey = data;

    // Initiate the form controls here based on fetched survey questions
    const controls: { [key: string]: string[] } = {};  // Added index signature here
    this.survey?.questions.forEach((question, idx) => {
      controls[`response${idx}`] = [''];  // default each control to an empty string
    });
    this.responseForm = this.fb.group(controls);

    const storedResponseCount = localStorage.getItem(`responseCount_${id}`);
    if (storedResponseCount) {
      this.responseCounter = parseInt(storedResponseCount, 10);
    }
}


submitResponses(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (!id) return;
  console.log('Submitting responses:', this.responses);

  // Populate the responses object from the form
  this.responses = this.responseForm.value;

  this.surveyService.submitSurveyResponse(id, this.responses)
    .pipe(
      tap(data => this.handleSurveySubmissionSuccess(data, id)),
      catchError(error => {
        console.error("Error submitting responses: ", error);
        alert('Error submitting responses. Please try again.');
        return of(null);  // Return an observable to keep the stream alive
      })
    )
    .subscribe();
}


  private handleSurveySubmissionSuccess(data: any, id: string): void {
    if (data.status) {
      this.responseCounter++;
      localStorage.setItem(`responseCount_${id}`, this.responseCounter.toString());
      alert('Responses submitted! Number of responses: ' + this.responseCounter);
    } else {
      alert('Error submitting responses: ' + data.message);
    }
  }
}

