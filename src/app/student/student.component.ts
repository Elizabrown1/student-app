import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor( public behaviourService: StudentService) { }
  public user:any = "";
  public firstName: string = "";
  public lastName:string = "";
  public matricNo:any = "";
  public phoneNumber:any = "";
  public userName:any = "";
  public email:any = "";

  ngOnInit(): void {
    this.behaviourService.data.subscribe(response =>{
      console.log(response);
      this.user = response
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.userName = this.user.userName;
      this.email = this.user.email;
      this.phoneNumber = this.user.phoneNumber;
      this.matricNo = this.user.matricNum;
    })
  }

}
