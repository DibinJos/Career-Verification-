import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {HealthServiceService} from '../../services/services';
import {PredegreeDetailsService} from "../../services/predegree-details.service"
import {ActivatedRoute} from '@angular/router' ;
import { Predegree } from '../../model/predegree';
import { Degree } from '../../model/degree';
import {FileUploadDownloadService} from "../../services/file-upload-download.service";
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-certification-canditate-details',
  templateUrl: './certification-canditate-details.component.html',
  styleUrls: ['./certification-canditate-details.component.css']
})
export class CertificationCanditateDetailsComponent implements OnInit {

  documentList=[];
  showDropdown:boolean=false;
  hideApproveButton:boolean=false
  dataSource:String[] =[];
  arr:any;
  //arr:any= {Education: 'XIII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Antony's Higher Secondary",Batch:"2009-10",Region: 'Janakpuri,Delhi',CGPA : '82%'};
  displayedColumns=[];
  candidateId:string;
  role:string;

  dataSource_degree:String[] =[];

  //arr:any= {Education: 'XIII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Antony's Higher Secondary",Batch:"2009-10",Region: 'Janakpuri,Delhi',CGPA : '82%'};
  displayedColumns_degree=[];

ELEMENT_DATA: any= [
];

ELEMENT_DATA_DEGREE: any= [
];


  constructor(private snackbar:MatSnackBar,private healthServiceService:HealthServiceService,
    private predegreeDetailsService:PredegreeDetailsService,
    private route: ActivatedRoute,
    private fileUploadDownloadService:FileUploadDownloadService) { }

  ngOnInit() {
    //this.ELEMENT_DATA.push(this.arr);
    this.route.params.subscribe(params=>
    {
      this.candidateId=params['id'];
      this.role=params['id2'];
      this.fileUploadDownloadService.getFiles(this.candidateId).subscribe((result)=>
      {
        console.log("Documents",result);
        this.documentList=JSON.parse(result._body).all_documents;
      })
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

    this.displayedColumns= ['studentClass', 'registrationNumber', 'board', 'schoolName','batch','region','cgpa','Approve'];
    this.dataSource = this.ELEMENT_DATA;
  
    this.displayedColumns_degree= ['degree', 'registrationNumber', 'specialisation', 'college','batch','university','cgpa','region','Approve'];
    this.dataSource_degree = this.ELEMENT_DATA_DEGREE;
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

  toggleDropdown()
  {
    this.showDropdown=!this.showDropdown
  }

  
  download(name:string)
  {
     this.fileUploadDownloadService.downloadFile(name).subscribe((result)=>
   {
     console.log("Yipeee");
     importedSaveAs(result,name);
   })
  }
}
