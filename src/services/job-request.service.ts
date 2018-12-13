import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {JobRequest} from "../model/job-request";
import {CourseRequest} from "../model/course-request";

@Injectable({
  providedIn: 'root'
})
export class JobRequestService {
  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})});

  constructor(private http:Http) { }

  addJobRequest(request:JobRequest):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/create_job_request.php', reqrequest, this.options )
  .map((response)=>{return response})


  }

  getJobRequests(employerId:string):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(employerId);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_job_request.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

  setStatus(change:any):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(change);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/update_resume_status.php', reqrequest, this.options )
  .map((response)=>{return response})
  }



  // Course Details


  addCourseRequest(request:CourseRequest):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/create_course_request.php', reqrequest, this.options )
  .map((response)=>{return response})


  }

  getCourseRequests(educatorId:string):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(educatorId);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_course_request.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

  setCourseRequestStatus(change:any):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(change);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/update_course_status.php', reqrequest, this.options )
  .map((response)=>{return response})
  }
}
