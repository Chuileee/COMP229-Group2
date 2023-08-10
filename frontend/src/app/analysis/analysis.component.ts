import { Component } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
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
