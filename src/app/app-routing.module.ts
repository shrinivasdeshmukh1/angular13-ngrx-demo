import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterviewsListComponent } from './interview/component/interview-list/interview-list.component';
import { InterviewResolver } from './interview/interview.resolver';
import { ScheduleInterviewComponent } from './interview/component/schedule-interview/schedule-interview.component';

const routes: Routes = [{
  path: 'list-interviews',
  component: InterviewsListComponent,
  resolve: {
    interviews: InterviewResolver
  }
},
{path: 'schedule-interview', component: ScheduleInterviewComponent},
{path: '**', redirectTo: 'list-interviews'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
