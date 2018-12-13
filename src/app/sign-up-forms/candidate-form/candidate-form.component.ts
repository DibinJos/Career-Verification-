import { Component, OnInit } from '@angular/core';
import {Candidate} from "../../../model/candidate";
import {CandidateSignUpService} from  "../../../services/candidate-sign-up.service";
import {LandingPageComponent} from "../../landing-page/landing-page.component";
import { MatDialogRef,MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  candidate:Candidate;

  constructor(private candidateSignUpService:CandidateSignUpService,
     public dialogRef: MatDialogRef<LandingPageComponent>,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.candidate=new Candidate();
  }

  signUp()
  {
this.candidateSignUpService.addCandidate(this.candidate).subscribe((result)=>
{
  console.log(result);
  this.close();
})
  }

  close()
  {
this.dialogRef.close();
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
