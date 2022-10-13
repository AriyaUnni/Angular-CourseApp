import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor() { }

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  readValues=()=>{
    let data={
      "courseTitle":this.courseTitle,
  "courseDescription":this.courseDescription,
  "courseDuration":this.courseDuration,
  "courseDate":this.courseDate,
  "courseVenue":this.courseVenue

    }
    console.log(data)
    
  }

  ngOnInit(): void {
  }

}
