import { Component } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  surveyName: string = '';
  questions: { text: string; questiontype: string; options?: string[] }[] = [];
  startDate: string = '';
  endDate: string = '';

  ngOnInit() {
    this.addQuestion();
  }

  addQuestion() {
    this.questions.push({ text: '', questiontype: 'multipleChoice', options: ['', '', '', ''] });
  }

  createSurvey() {
    console.log(this.surveyName);
    console.log(this.questions);
    console.log(this.startDate);
    console.log(this.endDate);
  }
}
