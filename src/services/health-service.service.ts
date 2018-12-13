import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Web3Service } from './web3.service'
import {Degree} from "../model/degree";
import {Employement} from "../model/employement"

const healthArtifacts = require('../../build/contracts/Certify.json');
const contract = require('truffle-contract');

@Injectable()
export class HealthServiceService {
	
	Health	= contract(healthArtifacts);

  constructor(
  private web3Ser: Web3Service,
  ) { 
  this.Health.setProvider(web3Ser.web3.currentProvider);
  }

  
    setTenthDetails(candidateId,candidateDetail,status): Observable<boolean> {
  	let meta;

  	return Observable.create(observer => {
  		this.Health
  		  .deployed()
  		  .then(instance => {
  		    meta = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return meta.setTethDetails(candidateId,candidateDetail.registrationNumber,candidateDetail.schoolName,candidateDetail.batch,candidateDetail.cgpa,candidateDetail.region,candidateDetail.board,status,{
  		      gas:"300000",from: "0x8675e44c117fd659ab2c016d46371eea619d9863"
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
  	})
	}


	setTwelvethDetails(candidateId,candidateDetail,status): Observable<boolean> {
  	let meta;

		return Observable.create(observer => {
  		this.Health
  		  .deployed()
  		  .then(instance => {
  		    meta = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return meta.setTwelvethDetails(candidateId,candidateDetail.registrationNumber,candidateDetail.schoolName,candidateDetail.batch,candidateDetail.cgpa,candidateDetail.region,candidateDetail.board,status,{
  		      gas:"300000",from: "0x8675e44c117fd659ab2c016d46371eea619d9863"
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
  	})
	}

	setEmploymentDetails(candidateId,candidateDetail:Employement,status): Observable<boolean> {
  	let meta;

		return Observable.create(observer => {
  		this.Health
  		  .deployed()
  		  .then(instance => {
  		    meta = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return meta.setApplicantEmployment(candidateId,candidateDetail.companyName,candidateDetail.fromDate,candidateDetail.toDate,candidateDetail.ctc,candidateDetail.tenure,status,{
  		      gas:"500000",from: "0x8675e44c117fd659ab2c016d46371eea619d9863"
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
  	})
	}






	getTenthDetails(candidateId): Observable<any[]> {
  	let meta;

  	return Observable.create(observer => {
  		this.Health
  		  .deployed()
  		  .then(instance => {
  		    meta = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return meta.getTethDetails.call(candidateId,{
  		      gas:"300000",from: "0x8675e44c117fd659ab2c016d46371eea619d9863"
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
		})
	}


	
	getTwelvethDetails(candidateId): Observable<any[]> {
  	let meta;

  	return Observable.create(observer => {
  		this.Health
  		  .deployed()
  		  .then(instance => {
  		    meta = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return meta.getTwelvethDetails.call(candidateId,{
  		      gas:"300000",from: "0x8675e44c117fd659ab2c016d46371eea619d9863"
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
		})
	}






	//Delet if not required
	
	getEducationDetails(candidateId): Observable<any[]> {
  	let meta;

  	return Observable.create(observer => {
  		this.Health
  		  .deployed()
  		  .then(instance => {
  		    meta = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return meta.getEducationalDetails.call(candidateId,{
  		      gas:"300000",from: "0x8675e44c117fd659ab2c016d46371eea619d9863"
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
		})
	}


		
	setDegreeDetails(candidateId,candidateDetail:Degree,status): Observable<boolean> {
  	let meta;

		return Observable.create(observer => {
  		this.Health
  		  .deployed()
  		  .then(instance => {
  		    meta = instance;
          //we use call here so the call doesn't try and write, making it free
  		    return meta.setDegreeDetails(candidateId,candidateDetail.regNumber,candidateDetail.college,candidateDetail.university,candidateDetail.batch,candidateDetail.cgpa,status,candidateDetail.degreeName,{
  		      gas:"300000",from: "0x8675e44c117fd659ab2c016d46371eea619d9863"
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value)
  		    observer.complete()
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e)
  		  });
  	})
	}
  
}
