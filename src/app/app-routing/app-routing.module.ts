import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {EmployeeFormComponent} from "../employee-form/employee-form.component";
import {LandingPageComponent} from "../landing-page/landing-page.component";
import {PageNotFoundComponentComponent} from "../page-not-found-component/page-not-found-component.component";
import {CertificationCanditateDetailsComponent} from "../certification-canditate-details/certification-canditate-details.component";
import {EmployerApplicantDetailsComponent} from "../employer/employer-applicant-details/employer-applicant-details.component"
import {CandidateDetailsComponent} from "../candidate/candidate-details/candidate-details.component";
import {JobRequestComponent} from "../employer/job-request/job-request.component";
import {VerificationRequestListComponent} from "../educators/verification-request-list/verification-request-list.component"
import {ApplyJobComponent} from "../candidate/apply-job/apply-job.component";
import {StudentSearchComponent} from "../educators/student-search/student-search.component";
import {SuperAdminHomeComponent} from "../superadmin/super-admin-home/super-admin-home.component";
import {CandidateDetailOverviewComponent} from "../candidate/candidate-detail-overview/candidate-detail-overview.component"
import {JobVerificationListComponent } from "../superadmin/job-verification-list/job-verification-list.component";
import {JobVerificationFormComponent} from "../candidate/job-verification-form/job-verification-form.component";
import {CertifyEmploymentDetailsComponent} from "../superadmin/certify-employment-details/certify-employment-details.component"
import {UploadCandidateDetailsComponent} from "../educators/upload-candidate-details/upload-candidate-details.component";
import {CoursePostingComponent} from "../educators/course-posting/course-posting.component";
import {CandidateEducationEmploymentDetailsComponent} from "../employer/candidate-education-employment-details/candidate-education-employment-details.component"
import {EmployeeSearchComponent} from "../employer/employee-search/employee-search.component";
import {AddJobPostingComponent} from "../employer/add-job-posting/add-job-posting.component";
import {JobRequestRecruiterComponent} from "../recruiter/job-request-recruiter/job-request-recruiter.component"
import {JobPostingRecruiterComponent} from "../recruiter/job-posting-recruiter/job-posting-recruiter.component";
import {CandidateDetailsRecruiterComponent} from "../recruiter/candidate-details-recruiter/candidate-details-recruiter.component";
import {SearchCandidateSuperadminComponent} from "../superadmin/search-candidate-superadmin/search-candidate-superadmin.component"
import {SearchEmploymentSuperadminComponent} from "../superadmin/search-employment-superadmin/search-employment-superadmin.component"
import {UploadEmployeeDetailsComponent} from "../employer/upload-employee-details/upload-employee-details.component"
import {ApplyCourseComponent} from "../candidate/apply-course/apply-course.component";
import {CourseRequetsComponent} from "../educators/course-requets/course-requets.component";
import {CandidateProfileComponent} from "../candidate/candidate-profile/candidate-profile.component";


const appRoutes:Routes=[
  {
    path:'',redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path:"home",
    component:LandingPageComponent
  },
  {
  path:"employeeForm",
  component:EmployeeFormComponent
  },
  {
    path:"job-request",
    component:JobVerificationFormComponent
    },
  {
    path: 'certify/:id', component: CertificationCanditateDetailsComponent 
  },
  {
    path: 'candidate-profile/:id', component: CandidateProfileComponent 
  },
  {
    path: 'candidate-details/:id', component: CandidateEducationEmploymentDetailsComponent 
  },
  {
    path: 'candidate-details-recruitment/:id', component: CandidateDetailsRecruiterComponent 
  },
  {
    path: 'certify-job/:id', component: CertifyEmploymentDetailsComponent 
  },
  {
    path: 'job-request-list', component: JobVerificationListComponent 
  },
  {
    path: 'view/:id', component: CandidateDetailOverviewComponent 
  },
  {
    path: '', component: CertificationCanditateDetailsComponent 
  },
  {
    path:'jobrequest',component:JobRequestComponent
  },
  {
    path:'courserequest',component:CourseRequetsComponent
  },
  {
    path:'applyCourse',component:ApplyCourseComponent
  },
  {
    path:'jobrequest-list',component:JobRequestRecruiterComponent
  },
  {
    path:'candidate-home',component:CandidateDetailsComponent
    
  },
  {
    path:"applicantDetail",component:EmployerApplicantDetailsComponent
  },
  {
    path:"requestList",component:VerificationRequestListComponent
  },
  {
    path:"applyJob",component:ApplyJobComponent
  },
  {
    path:"search",component:StudentSearchComponent
  },
  {
    path:"search-candidate-superadmin",component:SearchCandidateSuperadminComponent
  },
  {
    path:"search-employee",component:EmployeeSearchComponent
  },
  {
    path:"search-employee-superadmin",component:SearchEmploymentSuperadminComponent
  },
  {
    path:"upload-candidate",component:UploadCandidateDetailsComponent
  },
  {
    path:"upload-employee",component:UploadEmployeeDetailsComponent
  },
  {
    path:"course-posting",component:CoursePostingComponent
  },
  {
    path:"job-posting",component:AddJobPostingComponent
  },
  {
    path:"recruiter-job-posting",component:JobPostingRecruiterComponent
  },
  {
    path: 'superadmin-home', component: VerificationRequestListComponent 
  },
  {
    path: '**', component: PageNotFoundComponentComponent 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
