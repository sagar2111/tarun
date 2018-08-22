import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { UserService } from '../service/user.service';
import { User } from '../_models/user';
import { AlertService } from '../service/alert.service';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
   user: User = new User();
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(
                data => {
                  if(data.status == 'success')
          {
              this.alertService.success('Registration successful', true);
                    this.router.navigate(['login']);
             
          }else{
             this.alertService.error(data.status);
                    this.loading = false;
          }
      },
       err => {
        return err;
          
      }
       )
  }}


