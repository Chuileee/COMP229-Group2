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
  responses: any = {};
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
      console.log(this.responses); // For debugging, you should see all user responses
    
      // Now, you can send 'this.responses' to your backend or handle as needed.
      
      alert('Responses submitted!'); 
    }
    
}
