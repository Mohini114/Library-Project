import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-component',
  templateUrl: './member-component.component.html',
  styleUrls: ['./member-component.component.css']
})
export class MemberComponentComponent implements OnInit {
  uname: string;
  password: string;
  router: any;
  

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

  }
  OnLogin(form){
    if (this.uname == "Mohini" &&this.password == "1234") {
      this.route.navigate(['create']);
      alert('Login SUCCESS!! :-)\n\n')
    }else{
      alert("Invalid Credentials..");
     }

}

}

