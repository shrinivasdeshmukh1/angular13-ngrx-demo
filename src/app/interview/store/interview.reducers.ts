import { Interview } from './../model/interview.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { interviewActionTypes, interviewsLoaded } from './interview.actions';

export interface InterviewState extends EntityState<Interview> {
  interviewsLoaded: boolean;
}

export const adapter: EntityAdapter<Interview> = createEntityAdapter<Interview>();

export const initialState = adapter.getInitialState({
  interviewsLoaded: false
});

export const interviewReducer = createReducer(
  initialState,

  on(interviewActionTypes.interviewsLoaded, (state, action) => {
    return adapter.addMany(
      action.interviews,
      {...state, interviewsLoaded: true}
    );
  }),

  on(interviewActionTypes.createInterview, (state, action) => {
    return adapter.addOne(action.interview, state);
  }),

  on(interviewActionTypes.deleteInterview, (state, action) => {
    return adapter.removeOne(action.interviewId, state);
  }),

  on(interviewActionTypes.updateInterview, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
