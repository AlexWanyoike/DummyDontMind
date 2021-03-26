import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockform',
  templateUrl: './blockform.component.html',
  styleUrls: ['./blockform.component.css'],
  
})
export class BlockformComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  submit(){
    console.log("Form submitted",)
  }

  samples = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", name: "John", author:"Nelson Mandela"},
    { quote: "The way to get started is to quit talking and begin doing.", name: "alex1", author:"Walt Disney"},
    { quote: "If life were predictable it would cease to be life, and be without flavor.", name: "alex2", author:"Eleanor Roosevelt"}
  ];

  

 







}
