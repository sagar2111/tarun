import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Learn Angular';

   constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/login'])
  }
}
