import { Component, Input, OnInit,  EventEmitter} from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-blockform',
  templateUrl: './blockform.component.html',
  styleUrls: ['./blockform.component.css'],
  
  
  
})
export class BlockformComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//
  
 myimage:string ="assets/images/Thank your For Choosing Us!!.png";
 myimage1:string ="src/assets/images/Thank your For Choosing Us!! (1).png";

//
private _today = Date();
public get today() {
  return this._today;
}
public set today(value) {
  this._today = value;
}
myDate() {
  console.log(Date.now())
} 
//

  samples = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", name: "John", author:"Nelson Mandela", date:`${this._today}`},
    { quote: "The way to get started is to quit talking and begin doing.", name: "Henry", author:"Walt Disney" ,date:`${this._today}` },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", name: "Lucy", author:"Eleanor Roosevelt" ,date:`${this._today}` }
  ];

 // 
 
  
 
//
numberofLikes: number =0;
numberofDislikes: number =0;

likeButtonClick(){
  this.numberofLikes++;
};
dislikeButtonClick(){
  this.numberofDislikes++;
}


//
UserName:string = "Enter UserName"

//
 
  UserName:string = "Enter UserName"

  userlist = []

  onclick(myuser:string){
    if(myuser.length > 0)
    {
      this.userlist.push();
      myuser= '';
    }
    
  }


  

  
}
