import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {JobPosting} from "../model/job-posting";

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})});

  constructor(private http:Http) { }

  addJobPostings(request:JobPosting):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/create_job_posting.php', reqrequest, this.options )
  .map((response)=>{return response})


  }

  getJobPostings(employerId:string):Observable<any>
  {  
  const reqrequest = 'data=' + JSON.stringify(employerId);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_job_postings.php', reqrequest, this.options )
  .map((response)=>{return response})


  }
}
