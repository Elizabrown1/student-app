import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public myStudent:any = JSON.parse(localStorage.getItem("studentData")!)
 public student:any = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    matricNum: "10" + Math.floor(Math.random() *1000) 
  }
  public userList:any =[];
  constructor() { }

  ngOnInit(): void {
    // this.myStudent = JSON.parse(localStorage.getItem
    //   ("studentData")!);
    console.log();
  }

  register(){
    if(this.myStudent){
      this.userList = this.myStudent
    }
    else{
       this.userList;
    }
    this.userList = [...this.userList, this.student];
    
    localStorage.setItem("studentData",JSON.stringify(this.userList));
    this.student.firstName = "";
    this.student.lastName = "";
    this.student.email = "";
    this.student.userName = "";
    this.student.phoneNumber = "";
  }

}
