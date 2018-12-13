import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material"

@Component({
  selector: 'app-upload-employee-details',
  templateUrl: './upload-employee-details.component.html',
  styleUrls: ['./upload-employee-details.component.css']
})
export class UploadEmployeeDetailsComponent implements OnInit {

   verifyEmployee:boolean=true;

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  saveEmployementDetails()
  {
this.snackbar.open("Details uploaded successfully",'OK',
{
  duration:2000
})
  }

  verifyEmployeeDetails()
  {
    this.verifyEmployee=!this.verifyEmployee
  }


}
