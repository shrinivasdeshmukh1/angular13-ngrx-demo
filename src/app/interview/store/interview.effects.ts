import { interviewActionTypes, interviewsLoaded, updateInterview } from './interview.actions';
import { InterviewService } from './../services/interview.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class InterviewEffects {

  loadInterviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interviewActionTypes.loadInterviews),
      concatMap(() => this.interviewService.getAllInterviews()),
      map(interviews => interviewActionTypes.interviewsLoaded({interviews}))
    )
  );

  createInterview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interviewActionTypes.createInterview),
      concatMap((action) => this.interviewService.createInterview(action.interview)),
      tap(() => this.router.navigateByUrl('/list-interviews'))
    ),
    {dispatch: false}
  );

  deleteInterview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interviewActionTypes.deleteInterview),
      concatMap((action) => this.interviewService.deleteInterview(action.interviewId))
    ),
    {dispatch: false}
  );

  updateInterview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(interviewActionTypes.updateInterview),
      concatMap((action) => this.interviewService.updateInterview(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(private interviewService: InterviewService, private actions$: Actions, private router: Router) {}
}
