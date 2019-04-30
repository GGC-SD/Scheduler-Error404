import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Router, Routes, RouterModule } from '@angular/router/';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ScheduleConflictsComponent } from './components/schedule-conflicts/schedule-conflicts.component';
import { SystemErrorsComponent } from './components/system-errors/system-errors.component';
import { FacultyIssuesComponent } from './components/faculty-issues/faculty-issues.component';
import { FullCourselistComponent } from './components/full-courselist/full-courselist.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { CalendarComponent } from './components/calendar/calendar.component';
import { CoursesOfferedComponent } from './components/courses-offered/courses-offered.component';
import { CoursesUpcomingComponent } from './components/courses-upcoming/courses-upcoming.component';
import { CurrentScheduleComponent } from './components/current-schedule/current-schedule.component';
import { HomepageFacultyComponent } from './components/homepage-faculty/homepage-faculty.component';

import { CourselistService } from './courselist.service';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent,
    children: [
      { path: 'schedule-conflicts', component:ScheduleConflictsComponent },
      { path: 'system-errors', component:SystemErrorsComponent },
      { path: 'faculty-issues', component:FacultyIssuesComponent },
      { path: 'full-courselist', component:FullCourselistComponent }
    ]
    },
  { path: 'homepage-faculty', component:HomepageFacultyComponent },
  { path: 'login-page', component:LoginPageComponent },
  { path: "current-schedule", component: CurrentScheduleComponent },
  { path: "courses-upcoming", component: CoursesUpcomingComponent},
  { path: "courses-offered", component: CoursesOfferedComponent},
  { path: "calendar", component: CalendarComponent },
  { path: '#', redirectTo: 'homepage-faculty', pathMatch: 'full'},
  { path: '', redirectTo: 'login-page', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchResultsComponent,
    ScheduleConflictsComponent,
    SystemErrorsComponent,
    FacultyIssuesComponent,
    FullCourselistComponent,
    LoginPageComponent,
    CalendarComponent,
    CoursesOfferedComponent,
    CoursesUpcomingComponent,
    CurrentScheduleComponent,
    HomepageFacultyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private courselistService: CourselistService) { }

}
