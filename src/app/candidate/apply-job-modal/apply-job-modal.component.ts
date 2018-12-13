import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 
import {JobRequest} from "../../../model/job-request"

import { FileUploader } from 'ng2-file-upload';
import {ApplyJobComponent} from "../apply-job/apply-job.component";

import {JobRequestService} from "../../../services/job-request.service"

import {MatSnackBar} from '@angular/material';
import {FileUploadDownloadService} from "../../../services/file-upload-download.service";
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-apply-job-modal',
  templateUrl: './apply-job-modal.component.html',
  styleUrls: ['./apply-job-modal.component.css']
})
export class ApplyJobModalComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: "http://localhost:3000/upload"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  public attachmentList=[];

  employers:any[]=[{id:"EM121",name:"Employer-1"},{id:"EM122",name:"Employer-2"}]
  selectedValue:any;

  jobModel:JobRequest=new JobRequest();

  constructor( public dialogRef: MatDialogRef<ApplyJobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private jobRequestService:JobRequestService,
 private snackbar:MatSnackBar,
private fileUploadDownloadService:FileUploadDownloadService) { 
   this.uploader.onCompleteItem=(item:any,response:any,status:any,header:any)=>
   {
     this.attachmentList.push(JSON.parse(response));
   }
 }

  ngOnInit() {
  }

  apply()
  {
    this.jobModel.candidateId=this.data.candidateId;
    this.jobModel.employerId=this.data.employerId;
    this.jobModel.jobId=this.data.jobId;
    this.jobModel.status="Candidate Applied";

    this.jobRequestService.addJobRequest(this.jobModel).subscribe((result)=>
  {
    console.log("The result is",result);
    if(JSON.parse(result._body).success==true)
    {
      this.dialogRef.close('saved');
      this.uploader.uploadAll();
    }

    else{
this.openSnack("Some Error occured.","Failed");
    }
  })

}

download()
{
//    this.fileUploadDownloadService.downloadFile().subscribe((result)=>
//  {
//    console.log("Yipeee");
//    importedSaveAs(result,'Cert');
//  })
}

  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    })
  }



    



  

}
