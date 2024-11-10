import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRoute } from './dashboard.routing';
import { PhotoComponent } from './components/photo/photo.component';
import { SocialsComponent } from './components/socials/socials.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PhotoComponent,
    SocialsComponent,
    ResumeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute)
  ]
})
export class DashboardModule { }
