import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2 CRUD operations!';
  employees=[
    {
      name:"najeer",position:"soptware engineeer"},

      { name:"daresh",position:"techy"},

      {name:"ravindra",position:"manager"},

      {name:"dayanand",position:"ui developer"},

      {name:"mohan",position:"devops engineeer"},
      
      {name:"ravirohit",position:"full stack developer"}     
  ];
  
  model:any={};
  model2:any={};
  msg:any="";
  
  addEmployee(){
    this.employees.push(this.model);
    this.model ={};
  this.msg="Record is successfully added.....";

  } 

  deleteEmployee(i)
  {
    this.employees.splice(i,1);
  this.msg="Record is successfully deleted.....";
  
  }
myValue;
  editEmployee(k){
    this.model2.name=this.employees[k].name;
    this.model2.position=this.employees[k].position;
    this.myValue = k;
    
  }
  updateEmployee(){
let k =this.myValue;
for(let i=0; i< this.employees.length; i++){
if(i==k){
  this.employees[i]=this.model2;
  this.model2={}; 
  this.msg="Record is successfully updated.....";
  
}
}
  } 
  clickme(){
this.msg=""; 
  }
}
