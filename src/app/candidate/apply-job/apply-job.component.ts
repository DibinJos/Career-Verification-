import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {ApplyJobModalComponent} from "../apply-job-modal/apply-job-modal.component"
 
@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {


  constructor(private dialog:MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  openDialog(jobId:string,employerId:string,candidateId:string):void{
    const dialogRef=this.dialog.open(ApplyJobModalComponent,
    {
      width:'500px',
      data: { jobId: jobId,employerId:employerId,candidateId:candidateId }

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=='saved')
      {
      this.openSnack("Job Applied Successfully","OK");
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
