import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 
import {EmployeeFormComponent} from "../employee-form/employee-form.component";
import { FileUploader } from 'ng2-file-upload';

import {VerificationRequest} from "../../model/verification-request";
import {VerificationRequestService} from "../../services/verification-request.service";

import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent implements OnInit {


  public uploader:FileUploader = new FileUploader({url: "http://localhost:8084"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  educators:any[]=[{id:"ED121",name:"Educator-1"},{id:"ED122",name:"Educator-2"}]
  selectedValue:any;

  requestModel:VerificationRequest;
 


  constructor(
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private verificationRequestService:VerificationRequestService,
private snackbar:MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.requestModel=new VerificationRequest();
  }

 

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  };

  request()
  {
    this.onNoClick();
    this.requestModel.candidateId=this.data.candidateId;
    this.requestModel.verifierRemarks="";
    this.requestModel.status="Request Initiated";
    this.requestModel.educatorId="IN20001";

    this.verificationRequestService.addVerificationRequest(this.requestModel).subscribe((result)=>
  {
    console.log("The result",result);
    if(result._body == '{"success":true}')
    {
this.openSnack("Details saved successfully","Ok")
    }
    else{
      this.openSnack("Some error while saving","Failed")
    }

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
