import { Injectable } from '@angular/core';
import { RequestOptions, Headers,ResponseContentType } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Candidate} from "../model/candidate";
import { HttpHeaders } from '../../node_modules/@angular/common/http';
import { getMatFormFieldMissingControlError } from '../../node_modules/@angular/material';
import {Documents} from "../model/documents";

 

@Injectable({
  providedIn: 'root'
})
export class FileUploadDownloadService {

  private options=new RequestOptions({headers:new Headers({'Content-Type':'application/json'}),responseType: ResponseContentType.Blob });
  private options_2=new RequestOptions({headers:new Headers({'content-type':'application/x-www-form-urlencoded; charset=UTF-8'})})
  constructor(private http:Http) { }

  downloadFile(name:string):Observable<Blob> {
  {
   
 let body={fileName:name}

   return  this.http.post('http://localhost:3000/download', body,this.options)
   .map(res=>res.blob());
 

  }
}

  getFiles(candidateId):Observable<any>
  {
    let reqBody='data=' + JSON.stringify(candidateId);
  return this.http.post('http://loyalty-solution.westindia.cloudapp.azure.com:8081/loyaltycoin/certapis/get_all_documents.php',reqBody,this.options_2)
  .map((response)=>{return response});
  }

  
}
