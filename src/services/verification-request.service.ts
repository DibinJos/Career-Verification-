import { Injectable } from '@angular/core';
import {VerificationRequest} from "../model/verification-request"
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class VerificationRequestService {

  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})});
 
  constructor(private http:Http) { }

  addVerificationRequest(request:VerificationRequest):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(request);

    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/create_verification_request.php', reqrequest, this.options )
    .map((response)=>{return response})

  }

  getVerificationRequestList():Observable<any>
  {
    

    return  this.http.get('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_verification_request.php',this.options )
    .map((response)=>{return response})
  }

  updateStatus(statusChange:any){
    const reqrequest = 'data=' + JSON.stringify(statusChange);

    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/update_verification_status.php', reqrequest, this.options )
    .map((response)=>{return response})
  }



  addJobVerificationRequest(request:VerificationRequest):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(request);

    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/create_job_verification_request.php', reqrequest, this.options )
    .map((response)=>{return response})

  }

  getJobVerificationRequestList():Observable<any>
  {
    

    return  this.http.get('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_job_verification_request.php',this.options )
    .map((response)=>{return response})
  }

  updateJobRequestStatus(statusChange:any){
    const reqrequest = 'data=' + JSON.stringify(statusChange);

    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/update_job_verification_status.php', reqrequest, this.options )
    .map((response)=>{return response})
  }
}
