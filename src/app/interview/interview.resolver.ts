import { areInterviewsLoaded } from './store/interview.selectors';
import { loadInterviews, interviewsLoaded } from './store/interview.actions';
import { AppState } from './../store/reducers/index';
import { Interview } from './model/interview.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class InterviewResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areInterviewsLoaded),
        tap((interviewsLoaded) => {
          console.log('interviewsLoaded', interviewsLoaded);
          if (!interviewsLoaded) {
            this.store.dispatch(loadInterviews());
          }

        }),
        filter(interviewsLoaded => interviewsLoaded),
        first()
    );
  }
}
