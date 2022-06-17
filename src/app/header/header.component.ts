import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSub!: Subscription;
  constructor(private dataStorageService: DataStorageService, private authService:AuthService) { }

  ngOnInit(){
   this.userSub= this.authService.user.subscribe(
     user=>{
      this.isAuthenticated = !!user;
     }
   )
  }
  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
