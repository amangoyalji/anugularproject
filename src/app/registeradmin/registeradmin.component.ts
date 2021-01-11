import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {

  admin = new Admin();

  private _adminService:AdminService;

  constructor(private adminService:AdminService) {
    this._adminService=adminService;
   }

  ngOnInit(): void {
  }

  public registerAdmin(){
    this._adminService.registerAdmin(this.admin).subscribe(
      data=>{
        console.log(JSON.stringify(data));
      }
    );
  }

}
