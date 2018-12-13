import { Component, OnInit } from '@angular/core';
import {EducationalInstitute} from "../../../model/educational-institute";
import {EducationalSignUpService} from "../../../services/educational-sign-up.service";
import { MatDialogRef,MatSnackBar} from '@angular/material'; 
import {LandingPageComponent} from "../../landing-page/landing-page.component"

@Component({
  selector: 'app-educational-institute',
  templateUrl: './educational-institute.component.html',
  styleUrls: ['./educational-institute.component.css']
})
export class EducationalInstituteComponent implements OnInit {
  education:EducationalInstitute;
  subscriptions:any[]=['Full Subscription','CV Subscription'];

  constructor(private educationalSignUpService:EducationalSignUpService,
    private dialog:MatDialogRef<LandingPageComponent>,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.education=new EducationalInstitute();
  }
  signUp()
  {
    this.educationalSignUpService.addEducational(this.education).subscribe((result)=>
  {
    console.log(result);
    this.close();
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
