import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Predegree } from '../../../model/predegree';
import {PredegreeDetailsService} from "../../../services/predegree-details.service";
import {EmployementDetailsService} from "../../../services/employement-details.service"
import {MatSnackBar,MatTableDataSource} from '@angular/material';

import {Degree} from "../../../model/degree";
import {Employement} from "../../../model/employement";
import{CandidateBasicDetails} from "../../../model/candidate-basic-details"

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {


  ELEMENT_DATA: any[] = [
 {title:" ",file:" ",remove:" "}
 
  ];


  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns=[];


  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  predegree:Predegree=new Predegree();
  predegree2:Predegree=new Predegree();
  degree:Degree=new Degree();
  employement:Employement=new Employement();
  candidateId:string='IN339346';
  role:string="candidate";
  basic:CandidateBasicDetails=new CandidateBasicDetails();

  constructor(private router:Router,private _formBuilder: FormBuilder,
    private predegreeDetailsService:PredegreeDetailsService,private snackbar:MatSnackBar,
  private employementDetailsService:EmployementDetailsService) { }

  ngOnInit() {

    this.displayedColumns = ['title', 'file','remove'];

    this.getBasicDetails();
    // this.getPreDegreeDetails();

    
    this.basic.candidateId=this.candidateId;
   this.employement.candidateId=this.candidateId;

    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.predegree.candidateId="IN"+random.toString();
    this.predegree2.candidateId="IN"+random.toString();
    this.degree.candidateId='IN'+random.toString();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl4: ['', Validators.required],
      firstCtrl5: ['', Validators.required],
      firstCtrl1: ['',]


    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['',]
    });
  }

  navigate(route:string)
  {
this.router.navigate([route]);
  }


  saveDetails()
  {
    this.predegreeDetailsService.addPredDegreeDetails(this.predegree).subscribe((result)=>
  {
    console.log(result);
    if(result._body == '{"success":true}')
    {
this.openSnack("Details saved successfully","Ok")
    }
    else{
      this.openSnack("Some error while saving","Failed")
    }
  })
    console.log("Education Details",this.predegree);
  }

  save2Details()
  {
    this.predegreeDetailsService.addPredDegreeDetails(this.predegree2).subscribe((result)=>
  {
    if(result._body == '{"success":true}')
    {
this.openSnack("Details saved successfully","Ok")
    }
    else{
      this.openSnack("Some error while saving","Failed")
    }
  })
    console.log("Education Details",this.predegree);
  }

  // Save degree details

  saveDegreeDetails()
  {
    this.predegreeDetailsService.addDegreeDetails(this.degree).subscribe((result)=>
  {
    if(result._body == '{"success":true}')
    {
this.openSnack("Details saved successfully","Ok")
    }
    else{
      this.openSnack("Some error while saving","Failed")
    }
  })
    console.log("Education Details",this.degree);
  }


  saveEmployementDetails()
  {
    this.employementDetailsService.addEmployement(this.employement).subscribe((result)=>
  {
    console.log("The result is",result);
    if(result._body == '{"success":true}')
    {
this.openSnack("Details saved successfully","OK")
    }
    else{
      this.openSnack("Some error while saving","Failed")
    }
    
  })
  }


  saveBasicDetails()
  {
    this.predegreeDetailsService.addBasicDetails(this.basic).subscribe((result)=>
  {
    console.log("Education Details",result);
    if(result._body == '{"success":true}')
    {
this.openSnack("Details saved successfully","Ok")
    }
    else{
      this.openSnack("Some error while saving","Failed")
    }
  })
   
  }

  getBasicDetails()
  {
    this.predegreeDetailsService.getBasicDetails(this.candidateId).subscribe((result)=>
    {
      console.log("Education Details",result);
      let model:CandidateBasicDetails=new CandidateBasicDetails()
      model=JSON.parse(result._body).candidateDetails;
      this.basic.firstName=model[0].firstName;
      this.basic.middleName=model[0].middleName;
      this.basic.lastName=model[0].lastName;
      this.basic.address=model[0].address;
      this.basic.dob=model[0].dob;

      
    })
  }
  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    });
  }

  addRows()
  {
    console.log("hello")
    let content:any={title:" ",file:" ",remove:" "};
    content.title=" ";
    content.file=" ";
    content.remove=" ";

    this.ELEMENT_DATA.push(content);
    console.log(this.ELEMENT_DATA);

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  }

  removeRows()
  {
    this.ELEMENT_DATA.pop();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

 

}
