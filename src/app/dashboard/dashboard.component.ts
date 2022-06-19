import { Component,Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public student:any = JSON.parse(localStorage.getItem("studentData")!);
  public userLists:any = [];

  constructor(public behaviouralService: StudentService) { }

  ngOnInit(): void {
    this.userLists = this.student;
  }
  details (i:any){
      let findUser = this.student.find((val:any, index:any) => index == i)
      this.behaviouralService.data.next(findUser)
      console.log(i);
  }

}
