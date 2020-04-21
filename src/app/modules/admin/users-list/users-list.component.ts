import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users = [];
  constructor(private service: UserService,private spinner: NgxSpinnerService,private _snackBar: MatSnackBar) {

   }

  ngOnInit(): void {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this.service.getAllUsers().subscribe(
      u=>{this.users=u;
        }
      ,err=>{console.log(err)}
    );
  }

  deleteUser(user){

    let index = this.users.indexOf(user);
    this.service.deleteUser(user._id).subscribe((res)=>{
      this.users.splice(index,1);
      this._snackBar.open(user.name+" has been deleted successfuly","close",{
        duration: 5000,
      });
  },(err)=>{
    console.log(err);
  }); 
  }


}
