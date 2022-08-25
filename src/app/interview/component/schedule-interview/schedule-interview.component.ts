import { Interview } from './../../model/interview.model';
import { createInterview } from './../../store/interview.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html'
})
export class ScheduleInterviewComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit(submittedForm: any) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const interview: Interview = { id: uuid.v4(), name: submittedForm.value.name, schedule: submittedForm.value.schedule, skills: submittedForm.value.skills };
    this.store.dispatch(createInterview({interview}));

  }
}
