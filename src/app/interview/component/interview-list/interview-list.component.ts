import { getAllInterviews } from './../../store/interview.selectors';
import { interviewActionTypes } from './../../store/interview.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Interview } from './../../model/interview.model';
import { InterviewService } from './../../services/interview.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html'
})
export class InterviewsListComponent implements OnInit {

  interviews$: any;

  interviewToBeUpdated: any;

  isUpdateActivated = false;

  constructor(private interviewService: InterviewService, private store: Store<AppState>) { }

  ngOnInit() {
    this.interviews$ = this.store.select(getAllInterviews);
    this.interviewToBeUpdated = {};
  }

  deleteInterview(interviewId: string) {
    this.store.dispatch(interviewActionTypes.deleteInterview({interviewId}));
  }

  showUpdateForm(interview: Interview) {
    this.interviewToBeUpdated = {...interview};
    this.isUpdateActivated = true;
  }

  updateInterview(updateForm: any) {
    const update: Update<Interview> = {
      id: this.interviewToBeUpdated.id,
      changes: {
        ...this.interviewToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(interviewActionTypes.updateInterview({update}));

    this.isUpdateActivated = false;
    this.interviewToBeUpdated = {};
  }
}
