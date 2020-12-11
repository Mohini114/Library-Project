import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Users } from '../users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Book_title:any;
 
  users:Users[]=[];
  constructor(private router: Router,public rs: DataService) { }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }
  Search(){
    if(this.Book_title=="" ){
      this.ngOnInit();
    }else{
      this.users= this.users.filter(res=>{
        return res.Book_title.toLocaleLowerCase().match(this.Book_title.toLocaleLowerCase()); 
      })
    }
  }
  deleteRow(val){
    if(confirm("Are you sure to return?")){
    this.rs.deleteUser(val).subscribe(data =>{
    });
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })}
  }
 
  update(id){
    this.router.navigate(['/update',id]);
  }
  add(users){
    this.router.navigate(['/create',users]);
  }
  get(id){
    this.router.navigate(['/search',id]);
    // this.rs.getUsers().subscribe((response) => {
    // this.users = response;
  //});
}

  
}
