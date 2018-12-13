import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Employement} from "../model/employement"

@Injectable({
  providedIn: 'root'
})
export class EmployementDetailsService {

  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})});

  constructor(private http:Http) { }

  addEmployement(request:Employement):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/add_employement_Details.php', reqrequest, this.options )
  .map((response)=>{return response})


  }

  getEmployementDetails(candidateId:string):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(candidateId);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_employement_details.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

  updateEmployementDetails(status:string,candidateId:string,companyName:string):Observable<any>
  {
    let content={
      status:"",
      companyName:"",
      candidateId:""
    }
    content.status=status;
    content.companyName=companyName;
    content.candidateId=candidateId;
    const reqrequest = 'data=' + JSON.stringify(content);
    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/update_employment_status.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

  editEmployement(request:Employement):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/edit_employement_Details.php', reqrequest, this.options )
  .map((response)=>{return response})


  }
}
