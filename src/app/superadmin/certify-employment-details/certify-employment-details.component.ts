import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {HealthServiceService} from '../../../services/services';
import {PredegreeDetailsService} from "../../../services/predegree-details.service";
import {EmployementDetailsService} from "../../../services/employement-details.service"

import {ActivatedRoute} from '@angular/router' ;
import { Predegree } from '../../../model/predegree';
import { Degree } from '../../../model/degree';
import {Employement} from "../../../model/employement";

import {FileUploadDownloadService} from "../../../services/file-upload-download.service";
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-certify-employment-details',
  templateUrl: './certify-employment-details.component.html',
  styleUrls: ['./certify-employment-details.component.css']
})
export class CertifyEmploymentDetailsComponent implements OnInit {


  documentList=[];
  showDropdown:boolean=false;
  hideApproveButton:boolean=false

  arr:any;
  //arr:any= {Education: 'XIII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Antony's Higher Secondary",Batch:"2009-10",Region: 'Janakpuri,Delhi',CGPA : '82%'};

  candidateId:string;
  role:string;

  dataSource_employement:String[] =[];

  //arr:any= {Education: 'XIII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Antony's Higher Secondary",Batch:"2009-10",Region: 'Janakpuri,Delhi',CGPA : '82%'};

  displayedColumns_employement=[];


ELEMENT_DATA_EMPLOYEMENT: any= [
];


  constructor(private snackbar:MatSnackBar,private healthServiceService:HealthServiceService,
    private route: ActivatedRoute,
  private employementDetailsService:EmployementDetailsService,
private predegreeDetailsService:PredegreeDetailsService,
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
   this.getEmployementDetails();
    
  }

  getEmployementDetails()
   {

    this.employementDetailsService.getEmployementDetails(this.candidateId).subscribe((result)=>
  {
    console.log("employement details",result);
    let arrayList=JSON.parse(result._body).requestList;

    arrayList.forEach(element => {
      let model2:Employement=new Employement();
      model2.companyName=element.companyName;
      model2.employeeId=element.employeeId;
      model2.fromDate=element.fromDate;
      model2.toDate=element.toDate;
      model2.role=element.role;
      model2.tenure=element.tenure;
      model2.ctc=element.ctc;
      model2.approve=element.status;
   

      this.ELEMENT_DATA_EMPLOYEMENT.push(model2);


    });


    this.displayedColumns_employement= ['companyName', 'employeeId', 'fromDate', 'toDate','role','tenure','ctc','Approve'];
    this.dataSource_employement = this.ELEMENT_DATA_EMPLOYEMENT;


  })



 




  
  
   }


  approve(candidateId:string,element:any)
  {
    

  this.healthServiceService.setEmploymentDetails(candidateId,element,"Approved").subscribe((result)=>
  {
  console.log(result);
  element.approve="Approved";
  this.employementDetailsService.updateEmployementDetails(element.approve,this.candidateId,element.companyName).subscribe((result)=>
{
  console.log("The result from update",result);
  this.openSnack("Candidate details has been Certified","OK");
})

  })
      


 

   
   
  }


  reject(candidateId:string,element:any)
  {
    
 
 this.healthServiceService.setEmploymentDetails(candidateId,element,"Rejected").subscribe((result)=>
 {
 console.log(result);
 element.approve="Rejected";
 this.employementDetailsService.updateEmployementDetails(element.approve,this.candidateId,element.companyName).subscribe((result)=>
 {
   console.log("The result from update",result);
   this.openSnack("Candidate details has been Certified","OK");
 })

 })
  
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
this.showDropdown=!this.showDropdown;
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
