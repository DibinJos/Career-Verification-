import { Component, OnInit } from '@angular/core';
import {EmployementInstitute} from "../../../model/employement-institute";
import {EmployerSignUpService} from "../../../services/employer-sign-up.service";
import { MatDialogRef,MatSnackBar} from '@angular/material'; 
import {LandingPageComponent} from "../../landing-page/landing-page.component"

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  employer:EmployementInstitute;
  subscriptions:any[]=['Full Subscription','CV Subscription'];

  constructor(private employerSignUpService:EmployerSignUpService,
    private dialog:MatDialogRef<LandingPageComponent>,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.employer=new EmployementInstitute();
  }
  signUp()
  {
    this.employerSignUpService.addEmployer(this.employer).subscribe((result)=>
  {
    console.log(result);
    this.close()
  })
  }

  close()
  {
    this.dialog.close();

    this.openSnack('Sign-up Successfull','OK');
  }

  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    });
  }

}
