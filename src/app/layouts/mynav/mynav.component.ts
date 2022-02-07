import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.scss']
})
export class MynavComponent implements OnInit {


  listactive = false;
  navstatus = false;


  constructor() {

    window.addEventListener('scroll',()=>{
      if(window.scrollY > 20 ){
        this.navstatus = true
      }
      else {
        this.navstatus = false;
      }
      // alert(this.navstatus);
    })
  }


  ngOnInit(): void {

  }



}
