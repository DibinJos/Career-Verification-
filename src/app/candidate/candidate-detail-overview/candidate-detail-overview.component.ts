import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {HealthServiceService} from '../../../services/services';
import {PredegreeDetailsService} from "../../../services/predegree-details.service";
import {EmployementDetailsService} from "../../../services/employement-details.service"

import {ActivatedRoute} from '@angular/router' ;
import { Predegree } from '../../../model/predegree';
import { Degree } from '../../../model/degree';
import {Employement} from "../../../model/employement";

@Component({
  selector: 'app-candidate-detail-overview',
  templateUrl: './candidate-detail-overview.component.html',
  styleUrls: ['./candidate-detail-overview.component.css']
})
export class CandidateDetailOverviewComponent implements OnInit {

  edit:boolean=false;

  hideApproveButton:boolean=false
  dataSource:String[] =[];
  arr:any;
  //arr:any= {Education: 'XIII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Antony's Higher Secondary",Batch:"2009-10",Region: 'Janakpuri,Delhi',CGPA : '82%'};
  displayedColumns=[];
  candidateId:string;
  role:string;

  dataSource_degree:String[] =[];
  dataSource_employement:String[] =[];

  //arr:any= {Education: 'XIII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Antony's Higher Secondary",Batch:"2009-10",Region: 'Janakpuri,Delhi',CGPA : '82%'};
  displayedColumns_degree=[];
  displayedColumns_employement=[];

ELEMENT_DATA: any= [
];

ELEMENT_DATA_DEGREE: any= [
];

ELEMENT_DATA_EMPLOYEMENT: any= [
];


  constructor(private snackbar:MatSnackBar,private healthServiceService:HealthServiceService,
    private predegreeDetailsService:PredegreeDetailsService,
    private route: ActivatedRoute,
  private employementDetailsService:EmployementDetailsService) { }

  ngOnInit() {
    //this.ELEMENT_DATA.push(this.arr);
    this.route.params.subscribe(params=>
    {
      this.candidateId=params['id'];
      this.role=params['id2'];
    })
   this.getEducationDetails();
    
  }

  getEducationDetails()
   {

    this.predegreeDetailsService.getPreDegreeDetails(this.candidateId).subscribe((result)=>
  {
    console.log("The education details",result);
    let arrayList=JSON.parse(result._body).requestList;

    arrayList.forEach(element => {
      let model:Predegree=new Predegree();
      model.id=element.id;
      model.candidateId=element.candidateId;
      model.studentClass=element.studentClass;
      model.registrationNumber=element.registrationNumber;
      model.board=element.board;
      model.schoolName=element.schoolName;
      model.batch=element.batch;
      model.region=element.region;
      model.cgpa=element.cgpa;
      model.approve=element.status;

      this.ELEMENT_DATA.push(model);

    });



    
  this.predegreeDetailsService.getDegreeDetails(this.candidateId).subscribe((result)=>
  {
    console.log("The education details",result);
    let arrayList=JSON.parse(result._body).requestList;

    arrayList.forEach(element => {
      let model1:Degree=new Degree();
      model1.id=element.id;
      model1.candidateId=element.candidateid;
      model1.degreeName=element.degree;
      model1.specialisation=element.specialisation;
      model1.regNumber=element.registrationNumber;
      model1.college=element.college;
      model1.university=element.university;
      model1.batch=element.batch;
      model1.cgpa=element.cgpa;
      model1.region=element.region;
      model1.approve=element.status;

      this.ELEMENT_DATA_DEGREE.push(model1);


    });

    
    this.employementDetailsService.getEmployementDetails(this.candidateId).subscribe((result)=>
  {
    console.log("employement details",result);
    let arrayList=JSON.parse(result._body).requestList;

    arrayList.forEach(element => {
      let model2:Employement=new Employement();
      model2.id=element.id;
      model2.candidateId=element.candidateId;
      model2.companyName=element.companyName;
      model2.employeeId=element.employeeId;
      model2.fromDate=element.fromDate;
      model2.toDate=element.toDate;
      model2.role=element.role;
      model2.tenure=element.tenure;
      model2.ctc=element.ctc;
   

      this.ELEMENT_DATA_EMPLOYEMENT.push(model2);


    });

    this.displayedColumns= ['studentClass', 'registrationNumber', 'board', 'schoolName','batch','region','cgpa','save'];
    this.dataSource = this.ELEMENT_DATA;
  
    this.displayedColumns_degree= ['degree', 'registrationNumber', 'specialisation', 'college','batch','university','cgpa','save'];
    this.dataSource_degree = this.ELEMENT_DATA_DEGREE;

    this.displayedColumns_employement= ['companyName', 'employeeId', 'fromDate', 'toDate','role','tenure','ctc','save'];
    this.dataSource_employement = this.ELEMENT_DATA_EMPLOYEMENT;


  })
  })


 

  })


  
  
   }


  approve(candidateId:string,element:any)
  {
    
     if(element.studentClass=='X')
     {
  this.healthServiceService.setTenthDetails(candidateId,element,"Approved").subscribe((result)=>
  {
  console.log(result);
  element.approve="Approved";
  this.predegreeDetailsService.updatePreDegreeDetails(element.approve,this.candidateId,element.studentClass).subscribe((result)=>
{
  console.log("The result from update",result);
  this.openSnack("Candidate details has been Certified","OK");
})

  })
      }
      else  if(element.studentClass=='XII')
      {
  this.healthServiceService.setTwelvethDetails(candidateId,element,"Approved").subscribe((result)=>
  {
  console.log(result);
  element.approve="Approved";
  this.predegreeDetailsService.updatePreDegreeDetails(element.approve,this.candidateId,element.studentClass).subscribe((result)=>
  {
    this.openSnack("Candidate details has been Certified","OK");
  })
  })
      }


 

   
   
  }


  reject(candidateId:string,element:any)
  {
    
    if(element.studentClass=='X')
    {
 this.healthServiceService.setTenthDetails(candidateId,element,"Rejected").subscribe((result)=>
 {
 console.log(result);
 element.approve="Rejected";
 this.predegreeDetailsService.updatePreDegreeDetails(element.approve,this.candidateId,element.studentClass).subscribe((result)=>
 {
  this.openSnack("Candidate verification request has been Rejected","OK");
 })

 })
     }
     else  if(element.studentClass=='XII')
     {
 this.healthServiceService.setTwelvethDetails(candidateId,element,"Rejected").subscribe((result)=>
 {
 console.log(result);
 element.approve="Rejected";
 this.predegreeDetailsService.updatePreDegreeDetails(element.approve,this.candidateId,element.studentClass).subscribe((result)=>
 {
  this.openSnack("Candidate verification request has been Rejected","OK");
 })
 })
     }


 

  }




  
  approveDegree(candidateId:string,element:any)
  {
    

  this.healthServiceService.setDegreeDetails(candidateId,element,"Approved").subscribe((result)=>
  {
  console.log(result);
  element.approve="Approved";
  this.predegreeDetailsService.updateDegreeDetails(element.approve,this.candidateId,element.degreeName).subscribe((result)=>
{
  console.log("The result from update",result);
  this.openSnack("Candidate details has been Certified","OK");
})

  })
      
    


 

   
   
  }


  rejectDegree(candidateId:string,element:any)
  {
    
   
 this.healthServiceService.setDegreeDetails(candidateId,element,"Rejected").subscribe((result)=>
 {
 console.log(result);
 element.approve="Rejected";
 this.predegreeDetailsService.updateDegreeDetails(element.approve,this.candidateId,element.degreeName).subscribe((result)=>
 {
  this.openSnack("Candidate verification request has been Rejected","OK");
 })

 })
     
    


 

  }

  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    });
  }

  toggleEdit()
  {
    this.edit=!this.edit;
  }

  check()
  {
    console.log(this.dataSource);
    console.log(this.ELEMENT_DATA);
  }

  saveChangesPredegree(predegree:Predegree)
  {
this.predegreeDetailsService.editPreDegreeDetails(predegree).subscribe((result)=>
{
  console.log("Okay",result);
  this.edit=false;
})
  }

  saveChangesDegree(degree:Degree)
  {
this.predegreeDetailsService.editDegreeDetails(degree).subscribe((result)=>
{
  console.log("Okay",result);
  this.edit=false;
})
  }

  saveChangesEmployment(employement:Employement)
  {
this.employementDetailsService.editEmployement(employement).subscribe((result)=>
{
  console.log("Okay",result);
  this.edit=false;
})
  }

}
