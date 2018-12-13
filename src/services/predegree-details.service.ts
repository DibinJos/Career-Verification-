import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Predegree} from "../model/predegree";
import {Degree} from "../model/degree";
import {CandidateBasicDetails} from "../model/candidate-basic-details"


@Injectable()
export class PredegreeDetailsService {


  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})});
 
  constructor(private http:Http) { }

 




  addPredDegreeDetails(request:Predegree):Observable<any>
  {
   

    const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/add_predegree_Details.php', reqrequest, this.options )
  .map((response)=>{return response})


  }

  getPreDegreeDetails(candidateId:string):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(candidateId);
    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_predegree_details.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

  updatePreDegreeDetails(status:string,candidateId:string,studentClass:string):Observable<any>
  {
    let content={
      status:"",
      standard:"",
      candidateId:""
    }
    content.status=status;
    content.standard=studentClass;
    content.candidateId=candidateId;
    const reqrequest = 'data=' + JSON.stringify(content);
    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/update_predegree_status.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

  editPreDegreeDetails(predegree:Predegree):Observable<any>{

    const reqrequest = 'data=' + JSON.stringify(predegree);
    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/edit_predegree_Details.php', reqrequest, this.options )
  .map((response)=>{return response})
  }



  // set & get degree details

  addDegreeDetails(request:Degree):Observable<any>
  {
   

    const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/add_degree_Details.php', reqrequest, this.options )
  .map((response)=>{return response})


  }

  getDegreeDetails(candidateId:string):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(candidateId);
    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_degree_details.php', reqrequest, this.options )
  .map((response)=>{return response})
  }


  updateDegreeDetails(status:string,candidateId:string,degree:string):Observable<any>
  {
    let content={
      status:"",
      degreeName:"",
      candidateId:""
    }
    content.status=status;
    content.degreeName=degree;
    content.candidateId=candidateId;
    const reqrequest = 'data=' + JSON.stringify(content);
    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/update_degree_status.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

  editDegreeDetails(request:Degree):Observable<any>
  {
   

    const reqrequest = 'data=' + JSON.stringify(request);

   return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/edit_degree_Details.php', reqrequest, this.options )
  .map((response)=>{return response})


  }


  addBasicDetails(basicDetails:CandidateBasicDetails):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(basicDetails);

    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/add_candidate_Details.php', reqrequest, this.options )
   .map((response)=>{return response})
  }

  getBasicDetails(candidateId:string):Observable<any>
  {
    const reqrequest = 'data=' + JSON.stringify(candidateId);
    return  this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_candidate_details.php', reqrequest, this.options )
  .map((response)=>{return response})
  }

 

}
