import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  a:string="2334";
  b:number;

  ngOnInit(): void {
    this.b=Number(this.a);
   
  }

}
