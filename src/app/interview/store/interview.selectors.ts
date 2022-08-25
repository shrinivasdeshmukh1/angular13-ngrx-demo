import { InterviewState } from './interview.reducers';
import { Interview } from './../model/interview.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './interview.reducers';

export const interviewFeatureSelector = createFeatureSelector<InterviewState>('interviews');

export const getAllInterviews = createSelector(
  interviewFeatureSelector,
  selectAll
);

export const areInterviewsLoaded = createSelector(
  interviewFeatureSelector,
  state => state.interviewsLoaded
);



