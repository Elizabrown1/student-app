import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public student :any = []

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  view(){
     this.router.navigate(["/dashboard"]);
  }

}
