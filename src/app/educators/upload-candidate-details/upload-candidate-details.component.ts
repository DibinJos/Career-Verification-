import { Component, OnInit } from '@angular/core';
import {Predegree} from "../../../model/predegree";
import {Degree} from "../../../model/degree";
import {MatSnackBar} from "@angular/material"

@Component({
  selector: 'app-upload-candidate-details',
  templateUrl: './upload-candidate-details.component.html',
  styleUrls: ['./upload-candidate-details.component.css']
})
export class UploadCandidateDetailsComponent implements OnInit {

  predegree:Predegree;
  degree:Degree;
  selectedValue:string=""
  educations:any[]=['Degree/Post graduation/PhD','Pre-degree'];
 showPreDegree:boolean=true;
 showDegree:boolean=false;
  name:string;
  verifyPreDegree:boolean=true;
  verifyDegree:boolean=true;

  constructor(private MatSnackBar:MatSnackBar) { }

  ngOnInit() {
    this.predegree=new Predegree();
    this.degree=new Degree();

  }
  toggle()
  {
    if(this.selectedValue=='Degree/Post graduation/PhD')
    {
      this.showPreDegree=false;
      this.showDegree=true;
    }
    else{
      this.showPreDegree=true;
      this.showDegree=false;
    }
  }

  save()
  {
    this.MatSnackBar.open('Details Saved Successfully','OK',
  {
    duration:2000
  });
  }

  toggleVerifyPreDegree()
  {
    this.verifyPreDegree=!this.verifyPreDegree;
  }

  toggleVerifyDegree()
  {
    this.verifyDegree=!this.verifyDegree;
  }

}
