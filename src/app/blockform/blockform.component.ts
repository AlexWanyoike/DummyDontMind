import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockform',
  templateUrl: './blockform.component.html',
  styleUrls: ['./blockform.component.css']
})
export class BlockformComponent implements OnInit {
  
  quotedetails = 'quoteinfo';

  quoteinfo = {
    name : "Alex",
    age: "new",
  };


  
  constructor() { }

  ngOnInit(): void {
  }

}

