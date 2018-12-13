import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  filter:any;

  ELEMENT_DATA: any= [
    {CandidateName:"Harry Kane",CompanyName:'Infosys',EmployeeId: '670245', From: '28 July,2014', To: '3 May,2018', Role: "Technology Analyst",Tenure:"1 month",CTC: '4L'},
    {CandidateName:"Harry Kane",CompanyName:'EY',EmployeeId: 'J53335', From: '7 May,2018', To: 'Present', Role: "A Con",Tenure:"3 month",CTC: '5L'},
    {CandidateName:"Martin Luther",CompanyName:'Delloite',EmployeeId: 'D52345', From: '14 Nov,2014', To: 'Present', Role: "A Con",Tenure:"3 month",CTC: '5L'},
    {CandidateName:"Gibson Joseph",CompanyName:'KPMG',EmployeeId: 'K555443', From: '2 Jun,2014', To: 'Present', Role: "A Con",Tenure:"3 month",CTC: '6L'},
    {CandidateName:"Alencier Lopez",CompanyName:'PWC',EmployeeId: 'P67876', From: '7 May,2015', To: '7 May,2018', Role: "A Con",Tenure:"3 month",CTC: '4L'},
    {CandidateName:"Alencier Lopez",CompanyName:'EY',EmployeeId: 'J46875', From: '1 Jun,2018', To: 'Present', Role: "A Con",Tenure:"3 month",CTC: '10L'}
  ];
  //dataSource:String[] =[];
  displayedColumns:string[]=[];
 
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
    this.filter=[{CompanyName:"",EmployeeId:"",CandidateName:""}];
    

    this.displayedColumns= ['CandidateName','CompanyName','EmployeeId', 'From', 'To', 'Role','Tenure','CTC'];
    //  this.dataSource.filterPredicate =
    //  (data:any , filter: string) => (data.Batch == filter && data.Education == filter);

    this.dataSource.filterPredicate =
    (data: any, filters: string) => {
      const matchFilter = [];
      const filterArray = filters.split(',');
      const columns = [data.CompanyName,data.CandidateName,data.EmployeeId];
      // Or if you don't want to specify specifics columns =>
      // const columns = (<any>Object).values(data);
      
      //Main loop
      filterArray.forEach(filter => {
        const customFilter = [];
        columns.forEach(column => customFilter.push(column.toLowerCase().includes(filter)));
        matchFilter.push(customFilter.some(Boolean)); // OR
      });
      return matchFilter.every(Boolean); // AND
    }
   
    
  }


  applyFilter() {
// this.filter.forEach(element => {
//   this.dataSource.filter = element.batch;
//   this.dataSource.filter = element.education;
// });
let filterValue=this.filter[0].CompanyName + "," + this.filter[0].CandidateName + "," + this.filter[0].EmployeeId;

this.dataSource.filter = filterValue.trim().toLowerCase();

     

    // this.dataSource.filterPredicate = (data, filterValue) =>
    //   (data.Name.indexOf(filterValue) !== -1 )
    //   {
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    //   };


//   const tableFilters = [];
//   this.filter.forEach((filter) => {
//     tableFilters.push({
//       Education: filter.education,
//       Batch: filter.batch
//     });
//   });
//   this.dataSource.filter = JSON.stringify(tableFilters);
// }

  }

}
