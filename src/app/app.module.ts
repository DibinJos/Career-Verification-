import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import {Web3Service ,HealthServiceService,} from '../services/services';
import {PredegreeDetailsService} from "../services/predegree-details.service";
import {VerificationRequestService} from "../services/verification-request.service"
import {JobRequestService} from "../services/job-request.service"

import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CertAuthorityComponent } from './cert-authority/cert-authority.component';

import {AppRoutingModule} from "./app-routing/app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component'


import {MatDialogModule} from '@angular/material/dialog';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import {MatInputModule} from '@angular/material/input';
import { CertificationCanditateDetailsComponent } from './certification-canditate-details/certification-canditate-details.component';

import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material';
import { JobRequestComponent } from './employer/job-request/job-request.component';
import { EmployerApplicantDetailsComponent } from './employer/employer-applicant-details/employer-applicant-details.component';
import { CandidateDetailsComponent } from './candidate/candidate-details/candidate-details.component';

import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule  } from '@angular/forms';
import { VerificationRequestListComponent } from './educators/verification-request-list/verification-request-list.component';
import { ApplyJobComponent } from './candidate/apply-job/apply-job.component';
import { ApplyJobModalComponent } from './candidate/apply-job-modal/apply-job-modal.component';
import { StudentSearchComponent } from './educators/student-search/student-search.component';
import { PreviewDetailsComponent } from './candidate/preview-details/preview-details.component';
import { CandidateFormComponent } from './sign-up-forms/candidate-form/candidate-form.component';
import { EducationalInstituteComponent } from './sign-up-forms/educational-institute/educational-institute.component';
import { EmployerFormComponent } from './sign-up-forms/employer-form/employer-form.component';
import { SuperAdminHomeComponent } from './superadmin/super-admin-home/super-admin-home.component';
import { CandidateDetailOverviewComponent } from './candidate/candidate-detail-overview/candidate-detail-overview.component';
import { JobVerificationListComponent } from './superadmin/job-verification-list/job-verification-list.component';
import { JobVerificationFormComponent } from './candidate/job-verification-form/job-verification-form.component';
import { JobVerificationFormDialogComponent } from './candidate/job-verification-form-dialog/job-verification-form-dialog.component';
import { CertifyEmploymentDetailsComponent } from './superadmin/certify-employment-details/certify-employment-details.component';
import { UploadCandidateDetailsComponent } from './educators/upload-candidate-details/upload-candidate-details.component';
import { CoursePostingComponent } from './educators/course-posting/course-posting.component';
import { CandidateEducationEmploymentDetailsComponent } from './employer/candidate-education-employment-details/candidate-education-employment-details.component';
import { EmployeeSearchComponent } from './employer/employee-search/employee-search.component';
import { AddJobPostingComponent } from './employer/add-job-posting/add-job-posting.component';
import { JobRequestRecruiterComponent } from './recruiter/job-request-recruiter/job-request-recruiter.component';
import { CandidateDetailsRecruiterComponent } from './recruiter/candidate-details-recruiter/candidate-details-recruiter.component';
import { JobPostingRecruiterComponent } from './recruiter/job-posting-recruiter/job-posting-recruiter.component';
import { SearchCandidateSuperadminComponent } from './superadmin/search-candidate-superadmin/search-candidate-superadmin.component';
import { SearchEmploymentSuperadminComponent } from './superadmin/search-employment-superadmin/search-employment-superadmin.component';
import { UploadEmployeeDetailsComponent } from './employer/upload-employee-details/upload-employee-details.component';
import { RecruiterComponent } from './sign-up-forms/recruiter/recruiter.component';
import { ApplyCourseComponent } from './candidate/apply-course/apply-course.component';
import { ApplyCourseModalComponent } from './candidate/apply-course-modal/apply-course-modal.component';
import { CourseRequetsComponent } from './educators/course-requets/course-requets.component';
import {MatChipsModule} from '@angular/material/chips';
import { CandidateProfileComponent } from './candidate/candidate-profile/candidate-profile.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



const SERVICES = [
  Web3Service,
  HealthServiceService,
  PredegreeDetailsService,
  VerificationRequestService,
  JobRequestService
]



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    FileUploadModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatStepperModule,
    ReactiveFormsModule ,
    MatChipsModule,
    MatListModule,
    MatIconModule
    
  ],
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    CertAuthorityComponent,
    LandingPageComponent,
    PageNotFoundComponentComponent,
    ResumeUploadComponent,
    CertificationCanditateDetailsComponent,
    JobRequestComponent,
    EmployerApplicantDetailsComponent,
    CandidateDetailsComponent,
    VerificationRequestListComponent,
    ApplyJobComponent,
    ApplyJobModalComponent,
    StudentSearchComponent,
    PreviewDetailsComponent,
    CandidateFormComponent,
    EducationalInstituteComponent,
    EmployerFormComponent,
    SuperAdminHomeComponent,
    CandidateDetailOverviewComponent,
    JobVerificationListComponent,
    JobVerificationFormComponent,
    JobVerificationFormDialogComponent,
    CertifyEmploymentDetailsComponent,
    UploadCandidateDetailsComponent,
    CoursePostingComponent,
    CandidateEducationEmploymentDetailsComponent,
    EmployeeSearchComponent,
    AddJobPostingComponent,
    JobRequestRecruiterComponent,
    CandidateDetailsRecruiterComponent,
    JobPostingRecruiterComponent,
    SearchCandidateSuperadminComponent,
    SearchEmploymentSuperadminComponent,
    UploadEmployeeDetailsComponent,
    RecruiterComponent,
    ApplyCourseComponent,
    ApplyCourseModalComponent,
    CourseRequetsComponent,
    CandidateProfileComponent
  ],
  providers: [SERVICES],
  entryComponents:[ResumeUploadComponent,ApplyJobModalComponent,CandidateFormComponent,EducationalInstituteComponent,EmployerFormComponent,ApplyCourseModalComponent,
    JobVerificationFormDialogComponent,RecruiterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
