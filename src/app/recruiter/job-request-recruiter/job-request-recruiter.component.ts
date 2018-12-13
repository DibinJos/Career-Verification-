import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import {JobRequest} from "../../../model/job-request";
import {JobRequestService} from "../../../services/job-request.service";

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-job-request-recruiter',
  templateUrl: './job-request-recruiter.component.html',
  styleUrls: ['./job-request-recruiter.component.css']
})
export class JobRequestRecruiterComponent implements OnInit {

  employerId:string="EM121";
  displayedColumns:String[];

 

  
  ELEMENT_DATA: any[] = [
 
 
  ];


  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jobRequestService:JobRequestService,private snackbar:MatSnackBar) { }

  ngOnInit() {
  this.getRequests();
   
   
  }

  getRequests()
  {

    this.jobRequestService.getJobRequests(this.employerId).subscribe((result)=>
  {
    console.log("The result is",result);
    let listArray=JSON.parse(result._body).jobList;

   for(let i=0;i<listArray.length;i++)
   {
     let content:JobRequest=new JobRequest();
     content.requestId=listArray[i].id;
     content.candidateId=listArray[i].candidateId;
     content.jobId=listArray[i].jobId;
    content.candidateRemarks=listArray[i].candidateRemarks;
    content.status=listArray[i].status;
     this.ELEMENT_DATA.push(content);
   }
    
      
  

    this.displayedColumns = ['Request Id', 'Job Id', 'Candidate Id','Candidate Remarks','Status','Action'];
    this.dataSource.paginator = this.paginator;

  })
 
  }

  changeStatus(jobId:string,status:string)
  {
let statusObj:any={
"status":status,
"jobId":jobId
}

this.jobRequestService.setStatus(statusObj).subscribe((result)=>
{
  console.log("The result is",result);
  this.openSnack("Success","Ok")

})
  }


  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    });
  }

}
