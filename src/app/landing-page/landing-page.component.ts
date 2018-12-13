import { Component, OnInit } from '@angular/core';
import { HostListener, NgZone } from '@angular/core';

import {Web3Service,HealthServiceService} from '../../services/services'

import { canBeNumber } from '../../util/validation';

import { Router } from '@angular/router';

import {MatDialog} from '@angular/material';
import {MatSnackBar} from '@angular/material';

import {CandidateFormComponent} from '../sign-up-forms/candidate-form/candidate-form.component';
import {EducationalInstituteComponent} from "../sign-up-forms/educational-institute/educational-institute.component";
import{EmployerFormComponent} from "../sign-up-forms/employer-form/employer-form.component"
import {RecruiterComponent} from "../sign-up-forms/recruiter/recruiter.component";
declare var window: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit() {
  }

  account: any;
  accounts: any;

  balance: number;
  sendingAmount: number;
  recipientAddress: string;
  status: string;
  canBeNumber = canBeNumber;

  roles:String []=["Candidate","Educational Institutes","Companies/Employer","Recruiter/Job Aggregator","Super-Admin"];
  selectedRole:String;
  

  constructor(
    private _ngZone: NgZone,
    private web3Service: Web3Service,
    private healthServiceService:HealthServiceService,
    private router: Router,
    private dialog:MatDialog,
    private snackbar:MatSnackBar
    ) {
    
    this.onReady();
  }

  onReady = () => {

    // Get the initial account balance so it can be displayed.
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];

      // This is run from window:load and ZoneJS is not aware of it we
      // need to use _ngZone.run() so that the UI updates on promise resolution
      this.checkContract();
      this._ngZone.run(() =>
        this.refreshBalance()
      );
    }, err => alert(err))
  };

  refreshBalance = () => {
    // this.metaCoinService.getBalance(this.account)
    //   .subscribe(value => {
    //     this.balance = value
    //   }, e => {this.setStatus('Error getting balance; see log.')})
  };

  setStatus = message => {
    this.status = message;
  };

  sendCoin = () => {
    this.setStatus('Initiating transaction... (please wait)');

    // this.metaCoinService.sendCoin(this.account, this.recipientAddress, this.sendingAmount)
    //   .subscribe(() =>{
    //     this.setStatus('Transaction complete!');
    //     this.refreshBalance();
    //   }, e => this.setStatus('Error sending coin; see log.'))
  };

  checkContract = () =>{
    // this.healthServiceService.check()
    //   .subscribe((result) =>{
    //     console.log("------Hurray Getting connected--------",result);
    //     this.refreshBalance();
    //   }, e => this.setStatus('Error sending coin; see log.'))
  };

  login()
  {
    console.log("Selectwed role is",this.selectedRole);
    if(this.selectedRole =='Candidate')
    {
    this.router.navigate(['/candidate-home']);
    }
    else if(this.selectedRole=='Educational Institutes')
    {
      this.router.navigate(['/courserequest']);
    }
    else if(this.selectedRole=='Companies/Employer')
    {
      this.router.navigate(['/jobrequest']);
    }
    else if(this.selectedRole=='Recruiter/Job Aggregator')
    {
      this.router.navigate(['/jobrequest-list']);
    }
    else if(this.selectedRole=='Super-Admin')
    {
      this.router.navigate(['/superadmin-home']);
    }
  }


  showform(role:string)
  {
    if(role == 'candidate')
    {
    const dialogRef=this.dialog.open(CandidateFormComponent,
      {
        width:'500px'
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result=='saved')
        {
        this.openSnack("Candidate Enrolled Successfully","OK");
        }
      });
    }
    else if(role == 'education')
    {
    const dialogRef=this.dialog.open(EducationalInstituteComponent,
      {
        width:'500px'
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result=='saved')
        {
        this.openSnack("Educational Institute Enrolled Successfully","OK");
        }
      });
    }

   else if(role == 'employer')
    {
    const dialogRef=this.dialog.open(EmployerFormComponent,
      {
        width:'500px'
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result=='saved')
        {
        this.openSnack("Companies/Employer Enrolled Successfully","OK");
        }
      });
    }

   else if(role == 'recruiter')
    {
    const dialogRef=this.dialog.open(RecruiterComponent,
      {
        width:'500px'
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result=='saved')
        {
        this.openSnack("Recruiter/Job Aggregator Enrolled Successfully","OK");
        }
      });
    }
    }
    
  
    openSnack(message:string,action:string)
    {
      this.snackbar.open(message,action,
      {
        duration:2000,
      })
    }
  
  

}






