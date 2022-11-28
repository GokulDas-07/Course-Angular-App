import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  _id=""
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""




readValue=()=>
{

  let data:any={"_id":this._id,"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  console.log(data)
}

}
