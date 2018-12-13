import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {VerificationRequestService} from "../../../services/verification-request.service";

import {MatSnackBar} from '@angular/material';

import {RequestContent} from "../../../model/request-content"

@Component({
  selector: 'app-job-verification-list',
  templateUrl: './job-verification-list.component.html',
  styleUrls: ['./job-verification-list.component.css']
})
export class JobVerificationListComponent implements OnInit {

  displayedColumns:String[];
  showDropdown:boolean;

 

  
  ELEMENT_DATA: any[] = [
 
 
  ];


  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 

  @ViewChild(MatPaginator) paginator: MatPaginator;




 
  constructor(private verificationRequestService:VerificationRequestService,private snackbar:MatSnackBar) { }

  ngOnInit() {

  this.getRequests()
    // this.content.position=1;
    // this.content.name='Hydrogen';
    // this.content.weight=1.0079
    // this.content.symbol='H';
    // this.ELEMENT_DATA.push(this.content);
   
   
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
    
      
  

    this.displayedColumns = ['Request Id', 'Candidate Id', 'Status','Candidate Remarks','Verifier Remarks','Action'];
    this.dataSource.paginator = this.paginator;

  })
 
  }


  changeStatus(requestId:string,status:string)
  {
    let content:any={
      "requestId":requestId,
      "status":status
    }

    this.verificationRequestService.updateJobRequestStatus(content).subscribe((result)=>
  {
    console.log("The result is",result);
    this.openSnack("Evaluation Compeleted Successfully","OK")

  })
  }

  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    });
  }

  
  toggleDropdown()
  {
this.showDropdown=!this.showDropdown;
  }

}
