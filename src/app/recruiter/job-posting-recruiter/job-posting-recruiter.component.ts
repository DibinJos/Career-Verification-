import { Component, OnInit } from '@angular/core';
import {JobPosting} from "../../../model/job-posting";
import {JobPostingService} from"../../../services/job-posting.service";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-job-posting-recruiter',
  templateUrl: './job-posting-recruiter.component.html',
  styleUrls: ['./job-posting-recruiter.component.css']
})
export class JobPostingRecruiterComponent implements OnInit {


  jobPosting:JobPosting;
  employerId:string;
  listJobPostings:JobPosting[];

  constructor(private jobPostingService:JobPostingService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.employerId="2";
    this.jobPosting=new JobPosting();
    this.jobPosting.postedOn=new Date().toISOString().slice(0,10);
    this.jobPosting.employerId="2";
    this.getjobPostings();

  }

  addjobPostings()
  {
    this.jobPostingService.addJobPostings(this.jobPosting).subscribe((result)=>
  {
    console.log(result);
    this.openSnack("Job Posting Added Successfully","OK");

  })
  }

  getjobPostings()
  {
    this.jobPostingService.getJobPostings(this.employerId).subscribe((result)=>
  {
    console.log(result);
    this.listJobPostings=JSON.parse(result._body).jobpostings;
   

  })
  }


  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    })
  }


}
