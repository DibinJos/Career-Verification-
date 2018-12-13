import { Component, OnInit } from '@angular/core';
import {CoursePosting} from "../../../model/course-posting";
import {CoursePostingService} from"../../../services/course-posting.service";
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-course-posting',
  templateUrl: './course-posting.component.html',
  styleUrls: ['./course-posting.component.css']
})
export class CoursePostingComponent implements OnInit {
  coursePosting:CoursePosting;
  educatorId:string;
  courPostingsList:CoursePosting[];

  constructor(private coursePostingService:CoursePostingService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.educatorId="1";
    this.coursePosting=new CoursePosting();
    this.coursePosting.postedOn=new Date().toISOString().slice(0,10);
    this.coursePosting.educatorId="1";
    this.getCoursePostings();

  }

  addCoursePostings()
  {
    this.coursePostingService.addCoursePostings(this.coursePosting).subscribe((result)=>
  {
    console.log(result);
    this.openSnack("Course Added Successfully","OK");

  })
  }

  getCoursePostings()
  {
    this.coursePostingService.getCoursePostings(this.educatorId).subscribe((result)=>
  {
    console.log(result);
    this.courPostingsList=JSON.parse(result._body).coursepostings;
    

  })
  }


  openSnack(message:string,action:string)
  {
    this.snackbar.open(message,action,
    {
      duration:2000,
    })
  }

}
