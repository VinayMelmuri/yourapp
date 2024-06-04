import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yourapp';

  constructor(private route:Router){}

    goto1(){
      this.route.navigate(['/component/home'])
    }
    goto(){
      this.route.navigate(['/component/add']);
    }
}

