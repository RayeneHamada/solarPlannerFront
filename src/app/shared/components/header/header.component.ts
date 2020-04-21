import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private service: AuthService) { }
  username;
  ngOnInit(): void {
    this.service.userProfile().subscribe(p=>{
      console.log(p);
      this.username = p.user.fullName;
    });
  }
  toggleSideBar()
  {
    this.toggleSideBarForMe.emit();
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
