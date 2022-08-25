import { Interview } from './../model/interview.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadInterviews = createAction(
  '[Interviews List] Load Interviews via Service',
);

export const interviewsLoaded = createAction(
  '[Interviews Effect] Interviews Loaded Successfully',
  props<{interviews: Interview[]}>()
);

export const createInterview = createAction(
  '[Create Interview Component] Create Interview',
  props<{interview: Interview}>()
);

export const deleteInterview = createAction(
  '[Interviews List Operations] Delete Interview',
  props<{interviewId: string}>()
);

export const updateInterview = createAction(
  '[Interviews List Operations] Update Interview',
  props<{update: Update<Interview>}>()
);

export const interviewActionTypes = {
  loadInterviews,
  interviewsLoaded,
  createInterview,
  deleteInterview,
  updateInterview
};


