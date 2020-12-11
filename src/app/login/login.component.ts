import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  OnLogin(form){
    if (this.username == "Librarian" &&this.password == "1234") {
      this.route.navigate(['admin']);
      alert('Login SUCCESS!! :-)\n\n')
    }else{
      alert("Invalid Credentials..");
     }
console.log(form.userName);
//this.route.navigateByUrl("/admin");
  }

//   onCreatePost(postData: { userName: string; password: any }) {
//     // Send Http request
//     this.http
//       .post(
//         ' http://localhost:3000/posts',
//         postData
//       )
//       .subscribe(responseData => {
//         console.log(responseData);
//       });

//       //console.log(form.userName);
// this.route.navigate([('/admin')]);
//   }
}
