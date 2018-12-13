import { Component, OnInit } from '@angular/core';
import {JobPosting} from "../../../model/job-posting";
import {JobPostingService} from"../../../services/job-posting.service";
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-add-job-posting',
  templateUrl: './add-job-posting.component.html',
  styleUrls: ['./add-job-posting.component.css']
})
export class AddJobPostingComponent implements OnInit {

  jobPosting:JobPosting;
  employerId:string;
  listJobPostings:JobPosting[];

  constructor(private jobPostingService:JobPostingService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.employerId="1";
    this.jobPosting=new JobPosting();
    this.jobPosting.postedOn=new Date().toISOString().slice(0,10);
    this.jobPosting.employerId="1";
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
