import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  filter:any;
  filter_degree:any;
  education;

  educations:any[]=['X/XII','Degree/PG/P.hD'];
  showDegree:boolean=false;

  ELEMENT_DATA: any= [
    {Name:'Harry Kane',Education: 'X', RegNumber: 'IC12331', Board: 'ICSE', School: "St Paul's Academy",Batch:"2007-08",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '92%'},
    {Name:'Martin Luther',Education: 'X', RegNumber: 'IC12332', Board: 'ICSE', School: "DPS",Batch:"2007-08",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '82%'},
    {Name:'Gibson Joseph',Education: 'X', RegNumber: 'IC12333', Board: 'ICSE', School: "Santa Maria",Batch:"2007-08",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '97%'},
    {Name:'Alencier Lopez',Education: 'X', RegNumber: 'IC12334', Board: 'ICSE', School: "St Paul's Academy",Batch:"2007-08",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '72%'},
    {Name:'Harry Kane',Education: 'XII', RegNumber: 'CB18765', Board:  'CBSE',  School: "St Paul's Academy",Batch:"2009-10",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '82%'},
    {Name:'Martin Luther',Education: 'XII', RegNumber: 'CB18766', Board:  'CBSE',  School: "DPS",Batch:"2009-10",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '88%'},
    {Name:'Gibson Joseph',Education: 'XII', RegNumber: 'CB18767', Board:  'CBSE',  School: "Santa Maria",Batch:"2009-10",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '82%'},
    {Name:'Alencier Lopez',Education: 'XII', RegNumber: 'CB18768', Board:  'CBSE',  School: "DPS",Batch:"2009-10  ",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '80%'},
  
  ];

  ELEMENT_DATA_DEGREE: any= [
    {Name:'Harry Kane',Degree: 'B.Tech', RegNumber: 'MG12345',Specialisation:'Computer Science',College:'ST.Josephs',  University: "MG University",Batch:"2010-14",Region: 'Pala,Kerala',CGPA : '7.2'},
    {Name:'Martin Luther',Degree: 'B.Sc', RegNumber: 'BS12332',Specialisation:'Bio-Technology',College:'ST.Andrews', University: "Delhi University",Batch:"2010-13",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '6.2'},
    {Name:'Gibson Joseph',Degree: 'B.Com', RegNumber: 'BC12333',Specialisation:'Mathematics', College:'JNU',University: "Delhi University",Batch:"2010-13",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '97%'},
    {Name:'Alencier Lopez',Degree: 'B.A', RegNumber: 'BA12334',Specialisation:'Industrial Management',College:'ST.Stephens', University: "Delhi University",Batch:"2010-13",Region: 'Ghaziabad,Uttar Pradesh',CGPA : '72%'},
    
  
  ];
  //dataSource:String[] =[];
  displayedColumns:string[]=[];
  displayedColumns_degree:string[]=[];
 
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  dataSource_degree = new MatTableDataSource(this.ELEMENT_DATA_DEGREE);

  constructor() { }

  ngOnInit() {
    this.filter=[{education:"",batch:"",reg:""}];
    this.filter_degree=[{degree:"",batch:"",reg:""}];
    

    this.displayedColumns= ['Name','Education', 'RegNumber', 'Board', 'School','Batch','Region','CGPA'];
    this.displayedColumns_degree= ['Name','Degree', 'RegNumber', 'Specialisation', 'College','University','Batch','Region','CGPA'];
    //  this.dataSource.filterPredicate =
    //  (data:any , filter: string) => (data.Batch == filter && data.Education == filter);

    this.dataSource.filterPredicate =
    (data: any, filters: string) => {
      const matchFilter = [];
      const filterArray = filters.split(',');
      const columns = [data.Batch, data.Education,data.RegNumber];
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


    this.dataSource_degree.filterPredicate =
    (data: any, filters: string) => {
      const matchFilter = [];
      const filterArray = filters.split(',');
      const columns = [data.Batch, data.Degree,data.RegNumber];
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
let filterValue=this.filter[0].batch + "," + this.filter[0].education + ","+ this.filter[0].reg;

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

  applyDegreeFilter() {
    // this.filter.forEach(element => {
    //   this.dataSource.filter = element.batch;
    //   this.dataSource.filter = element.education;
    // });
    let filterValue=this.filter_degree[0].batch + "," + this.filter_degree[0].degree + ","+ this.filter_degree[0].reg;
    
    this.dataSource_degree.filter = filterValue.trim().toLowerCase();
    
         
    
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
  change(str)
  {
    console.log(this.education);
    if(this.education=='X/XII')
    {
      this.showDegree=false;
    }
    else{
      this.showDegree=true;
    }
  }
}
