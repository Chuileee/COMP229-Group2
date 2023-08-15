import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../survey/survey.model';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.css']
})
export class SurveyResponseComponent implements OnInit {
  @Input() survey: Survey | null = null; // Define input property
  responses: any = {};
  responseCounter: number = 0;

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.surveyService.getSurveyById(id).subscribe(data => {
        this.survey = data;

        // Fetch response count from local storage
        const storedResponseCount = localStorage.getItem(`responseCount_${id}`);
        if (storedResponseCount) {
          this.responseCounter = parseInt(storedResponseCount, 10);
        }
      }, error => {
        console.error("Error fetching survey: ", error);
      });
    }
  }

  submitResponses(): void {
    console.log(this.responses);
  
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.surveyService.submitSurveyResponse(id, this.responses).subscribe(
        data => {
          if (data.status) {
            // Increment the response counter and store in local storage
            this.responseCounter++;
            localStorage.setItem(`responseCount_${id}`, this.responseCounter.toString());
            alert('Responses submitted! Number of responses: ' + this.responseCounter);
          } else {
            alert('Error submitting responses: ' + data.message);
          }
        },
        error => {
          console.error("Error submitting responses: ", error);
          alert('Error submitting responses. Please try again.');
        }
      );
  }
  }
}
