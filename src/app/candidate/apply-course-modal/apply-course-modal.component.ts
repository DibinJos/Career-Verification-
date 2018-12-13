import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 
import {CourseRequest} from "../../../model/course-request"

import { FileUploader } from 'ng2-file-upload';
import {ApplyJobComponent} from "../apply-job/apply-job.component";

import {JobRequestService} from "../../../services/job-request.service"

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-apply-course-modal',
  templateUrl: './apply-course-modal.component.html',
  styleUrls: ['./apply-course-modal.component.css']
})
export class ApplyCourseModalComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: "http://localhost:8084"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  employers:any[]=[{id:"EM121",name:"Employer-1"},{id:"EM122",name:"Employer-2"}]
  selectedValue:any;

  courseModel:CourseRequest=new CourseRequest();

  constructor( public dialogRef: MatDialogRef<ApplyJobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private jobRequestService:JobRequestService,
 private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  apply()
  {
    this.courseModel.candidateId=this.data.candidateId;
    this.courseModel.educatorId=this.data.educatorId;
    this.courseModel.courseId=this.data.courseId;
    this.courseModel.status="Candidate Applied";

    this.jobRequestService.addCourseRequest(this.courseModel).subscribe((result)=>
  {
    console.log("The result is",result);
    if(JSON.parse(result._body).success==true)
    {
      this.dialogRef.close('saved');
    }

    else{
this.openSnack("Some Error occured.","Failed");
    }
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
