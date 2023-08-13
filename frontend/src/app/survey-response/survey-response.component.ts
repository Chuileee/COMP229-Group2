import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey/survey.model';  // Make sure to update the path accordingly
import { ActivatedRoute } from '@angular/router'; 
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.css']
})
export class SurveyResponseComponent implements OnInit {

  survey: Survey | null = null; // Initialize with null. You'll need to fetch the survey data later.

  constructor(
    private route: ActivatedRoute,   // Inject ActivatedRoute
    private surveyService: SurveyService // Inject your SurveyService
  ) { }

  
    // Get the survey's _id from the route parameters
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');  // Fetch the survey id from the URL
      if (id) {
        this.surveyService.getSurveyById(id).subscribe(data => {
          this.survey = data;  // Assign the fetched survey data to the survey property
        }, error => {
          console.error("Error fetching survey: ", error);
        });
      }
    }
    

  submitResponses(): void {
    // Implement logic to gather responses and send to your backend.
    alert('Responses submitted!'); // For now, just a placeholder to see if the method gets called.
  }
}
