import { Dataform } from './../dataform';
import { Component, Input, OnInit,  EventEmitter,Output} from '@angular/core';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-blockform',
  templateUrl: './blockform.component.html',
  styleUrls: ['./blockform.component.css'],
  
  
  
})
export class BlockformComponent implements OnInit {
  ngOnInit() {
  }
//
  
 myimage:string ="assets/images/Thank your For Choosing Us!!.png";
 myimage1:string ="assets/images/Thank your For Choosing Us!! (1).png";
 myimage2:string ="assets/images/Thank your For Choosing Us!! (2).png";
 myimage3:string ="assets/images/Pink and Blue Galaxy Gaming YouTube Channel Art.png";

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

calculateDiff(){
  let start:number = new Date().getTime()
  let end:number = new Date(this._today).getTime()
  let time = start - end

  let diffDay = Math.floor(time/86400000);
  let diffHour = Math.floor((time % 3600000));

  if(diffDay >=1){
    return diffDay
  } else {
    return diffHour
  }
}




//

  samples = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", name: "John", author:"Nelson Mandela", date:`${this._today}`},
    { quote: "The way to get started is to quit talking and begin doing.", name: "Henry", author:"Walt Disney" ,date:`${this._today}` },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", name: "Lucy", author:"Eleanor Roosevelt" ,date:`${this._today}` }
  ];

  


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


//
 
  UserName:string = "Enter UserName"

  quotelist = []


  quote = new Dataform("","","");
  
  @Output() add = new EventEmitter<Dataform>();
  
  onCreate(sample:any){
    this.samples.push(sample);
    
    this.quote = new Dataform("","","");
    this.add.emit(this.quote);
    
  }
  onDelete(sample:any){
    this.samples.splice(sample);

  }


  addQuote(sample:any){
    this.samples.push(sample)
    console.log('name')
  }


}
