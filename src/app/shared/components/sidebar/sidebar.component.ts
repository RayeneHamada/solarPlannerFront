import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private service: AuthService) { }

  username;
  isAdmin;
  isUser;
  ngOnInit(): void {
    this.isAdmin = this.service.isAdmin();
    this.isUser = this.service.isLoggedUser();
    this.service.userProfile().subscribe(p=>{
      this.username = p.user.fullName;
    });
    

   
  }

}
