import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import{ ResumeUploadComponent} from "../resume-upload/resume-upload.component"
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {VerificationRequestService} from "../../services/verification-request.service";
import {RequestContent} from "../../model/request-content"


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

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
    const dialogRef=this.dialog.open(ResumeUploadComponent,
    {
      width:'500px',
      data: { candidateId: this.candidateId }

    });
  }


  getRequests()
  {

    this.verificationRequestService.getVerificationRequestList().subscribe((result)=>
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
