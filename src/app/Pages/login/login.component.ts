import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      role:['',Validators.required]
    })
  }
  login(){
    this.api.getEmp()
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.empName === this.loginForm.value.username && a.empRole === this.loginForm.value.role ;

      });
      if(user){
        alert("Login success");

      }else{
        alert("User not found!!")
      }
    })
  }

}
