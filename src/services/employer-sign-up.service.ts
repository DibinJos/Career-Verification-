import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {EmployementInstitute} from "../model/employement-institute"

@Injectable({
  providedIn: 'root'
})
export class EmployerSignUpService {
  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})});

  constructor(private http:Http) { }

  addEmployer(request:EmployementInstitute):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/create_employer.php', reqrequest, this.options )
  .map((response)=>{return response})


  }
}
