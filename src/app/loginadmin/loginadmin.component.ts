import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  admin = new Admin();


  constructor(private _adminService:AdminService) {}

  ngOnInit(): void {
  }

  public loginAdmin(){
    this._adminService.loginAdmin(this.admin.adminEmail,this.admin.adminPassword).subscribe(
      data=>{
        if(data == null){
          console.log("invalid Credentiials");
        }
        else{
          console.log(JSON.stringify(data));
        }
      }
    );
  }

}
