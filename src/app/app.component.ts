import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yourapp';
  isScreenSmall: boolean = false;
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private route:Router,private breakpointObserver: BreakpointObserver){
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Tablet]).subscribe(result=>{
      this.isScreenSmall = result.matches;

    }) 
  }

  closeSidenav(){
    if(this.isScreenSmall){
      this.sidenav.close();
    }
  }
   
}

