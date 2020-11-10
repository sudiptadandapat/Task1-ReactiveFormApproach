import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm: FormGroup;

  genders =['Male','Female']

  submitted=false;
  entryArray=[];

  user={
    name:'',
    email:'',
    gender:'',
    phoneNo:0,
    time:''
    
  }
  ngOnInit(){
    this.signupForm= new FormGroup({      
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl(null,Validators.required),
      'phoneNo':new FormControl(null)
    });
  }

  onSubmit(){
    this.submitted=true;
    this.user = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      phoneNo: this.signupForm.value.phoneNo,
      time: new Date().toLocaleString()

    }
    // console.log(this.user);
    this.entryArray.push(this.user);
    this.signupForm.reset();
    
  }

  onReset(){
    this.signupForm.reset();
  }


  
}
