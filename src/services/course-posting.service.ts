import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {CoursePosting} from "../model/course-posting";

@Injectable({
  providedIn: 'root'
})
export class CoursePostingService {
  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})});

  constructor(private http:Http) { }

  addCoursePostings(request:CoursePosting):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/create_course_posting.php', reqrequest, this.options )
  .map((response)=>{return response})


  }

  getCoursePostings(educatorId:string):Observable<any>
  {
   
  const reqrequest = 'data=' + JSON.stringify(educatorId);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_course_postings.php', reqrequest, this.options )
  .map((response)=>{return response})


  }
}
