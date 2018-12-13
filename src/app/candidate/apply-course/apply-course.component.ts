import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatSnackBar} from '@angular/material';

import {ApplyCourseModalComponent} from "../apply-course-modal/apply-course-modal.component";

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.css']
})
export class ApplyCourseComponent implements OnInit {



  constructor(private dialog:MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  openDialog(jobId:string,employerId:string,candidateId:string):void{
    const dialogRef=this.dialog.open(ApplyCourseModalComponent,
    {
      width:'500px',
      data: { courseId: jobId,educatorId:employerId,candidateId:candidateId }

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=='saved')
      {
      this.openSnack("Course Applied Successfully","OK");
      }
    });
  }
  

  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    })
  }

}
