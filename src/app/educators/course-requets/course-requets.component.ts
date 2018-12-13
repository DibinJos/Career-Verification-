import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import {CourseRequest} from "../../../model/course-request";
import {JobRequestService} from "../../../services/job-request.service";

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-course-requets',
  templateUrl: './course-requets.component.html',
  styleUrls: ['./course-requets.component.css']
})
export class CourseRequetsComponent implements OnInit {

  educatorId:string="ED121";
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

    this.jobRequestService.getCourseRequests(this.educatorId).subscribe((result)=>
  {
    console.log("The result is",result);
    let listArray=JSON.parse(result._body).courseList;

   for(let i=0;i<listArray.length;i++)
   {
     let content:CourseRequest=new CourseRequest();
     content.requestId=listArray[i].id;
     content.candidateId=listArray[i].candidateId;
     content.courseId=listArray[i].courseId;
    content.candidateRemarks=listArray[i].candidateRemarks;
    content.status=listArray[i].status;
     this.ELEMENT_DATA.push(content);
   }
    
      
  

    this.displayedColumns = ['Request Id', 'Course Id', 'Candidate Id','Candidate Remarks','Status','Action'];
    this.dataSource.paginator = this.paginator;

  })
 
  }

  changeStatus(courseId:string,status:string)
  {
let statusObj:any={
"status":status,
"courseId":courseId
}

this.jobRequestService.setCourseRequestStatus(statusObj).subscribe((result)=>
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
