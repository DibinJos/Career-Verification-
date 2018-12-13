import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import{ JobVerificationFormDialogComponent} from "../job-verification-form-dialog/job-verification-form-dialog.component"
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {VerificationRequestService} from "../../../services/verification-request.service";
import {RequestContent} from "../../../model/request-content"

@Component({
  selector: 'app-job-verification-form',
  templateUrl: './job-verification-form.component.html',
  styleUrls: ['./job-verification-form.component.css']
})
export class JobVerificationFormComponent implements OnInit {

  displayedColumns:String[];

 

  
  ELEMENT_DATA: any[] = [
 
 
  ];


  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 

  @ViewChild(MatPaginator) paginator: MatPaginator;


  candidateId:string

  constructor(public dialog: MatDialog,private verificationRequestService:VerificationRequestService) { }

  ngOnInit() {
    this.candidateId='IN339346';
    this.getRequests()
  }

  openDialog():void{
    const dialogRef=this.dialog.open(JobVerificationFormDialogComponent,
    {
      width:'500px',
      data: { candidateId: this.candidateId }

    });
  }


  getRequests()
  {

    this.verificationRequestService.getJobVerificationRequestList().subscribe((result)=>
  {
    console.log("The result is",result);
    let listArray=JSON.parse(result._body).requestList;

   for(let i=0;i<listArray.length;i++)
   {
     let content:RequestContent=new RequestContent();
     content.RequestId=listArray[i].id;
     content.CandidateId=listArray[i].candidateId;
     content.CandidateRemarks=listArray[i].requestorRemarks;
    content.Status=listArray[i].status;
     this.ELEMENT_DATA.push(content);
   }
    
      
  

    this.displayedColumns = ['Request Id', 'Candidate Id', 'Status','Candidate Remarks','Verifier Remarks'];
    this.dataSource.paginator = this.paginator;

  })
 
  }

}
