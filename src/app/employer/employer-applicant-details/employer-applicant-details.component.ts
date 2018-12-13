import { Component, OnInit } from '@angular/core';
import {HealthServiceService} from '../../../services/services'

@Component({
  selector: 'app-employer-applicant-details',
  templateUrl: './employer-applicant-details.component.html',
  styleUrls: ['./employer-applicant-details.component.css']
})
export class EmployerApplicantDetailsComponent implements OnInit {

  dataSource:String[] =[];
  arr:any;
  //arr:any= {Education: 'XIII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Antony's Higher Secondary",Batch:"2009-10",Region: 'Janakpuri,Delhi',CGPA : '82%'};
  displayedColumns=[];
  candidateId:string;
  certificates:any[];

ELEMENT_DATA: any= [
  {Education: 'X', RegNumber: 'IC12331', Board: 'ICSE', School: "St Paul's Academy",Batch:"2007-08",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '92%'},
  {Education: 'XII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Paul's Academy",Batch:"2009-10",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '82%'}

];

  constructor(private healthServiceService:HealthServiceService) { }

  ngOnInit() {
    this.displayedColumns= ['Education', 'RegNumber', 'Board', 'School','Batch','Region','CGPA','Approve'];
    this.dataSource = this.ELEMENT_DATA;
    this.candidateId="24";

    this.getCertfiedDetails()
  }
  getCertfiedDetails()
  {
    this.healthServiceService.getEducationDetails(this.candidateId).subscribe((result)=>
  {
    this.certificates=result;
    console.log(this.certificates);
  })
  }

}
