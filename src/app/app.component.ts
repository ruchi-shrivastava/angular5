import { Component } from '@angular/core';
//import { DataService } from '../services/DataService';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataService } from '../component/services/DataService';
import { yesnoResponse } from '../Model/yesnoResponse';



//interface Response{
  //title: string;
  //image: string;
//}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private intro;
  private inputValue = 'Enter text here';
  private userInput;
  private showUserInput = false;
  //private title;
//private carList = ['civic', 'honda', 'activa']; 

  private obj = [{ key: 20 }, { key: 20 }, { key: 20 }];
 private carList = [];
 private yesNoList = [];
  public yesNoResponse: yesnoResponse = {
    answer: '',
    image: ''
  }

  
 /*public constructor(dataService: DataService) {
  this.intro = 'Template Reference Variable Demo';
   console.log('dataService' , dataService);
   // this.carList = dataService.fetchCarList();
    dataService.fetchCarList((data) => {
    console.log('executing')
    this.carList = data;
  });
}*/

/*
(16-6-2018)
public constructor(dataservice: DataService, httpclient: HttpClient){
  httpclient.get("https://jsonplaceholder.typicode.com/posts/1")
  .toPromise()
  .then((data: Response)=>{
     console.log(data.title);
     console.log(data.image);
    // this.title = data.title;
  })
  .catch((error)=>{
    console.log("Error fetching response");
  });

  const returnPromise = dataservice.fetchCarList();
  returnPromise.then((data: [string])=>{
    console.log ('data',data);
    this.carList = data;
  })
  .catch((err)=>{
    console.log("Error in fetching data");
  });
} 
*/


public constructor(dataservice: DataService, httpclient: HttpClient){
  httpclient.get("https://yesno.wtf/api")
.toPromise()
.then((res: yesnoResponse)=>{
  this.yesNoResponse.answer = res.answer;
  this.yesNoResponse.image = res.image;
  console.log(this.yesNoResponse);
})

    .catch((error)=>{
      console.log("error fetching responsive");
    });

    const returnPromise = dataservice.fetchCarList();
    returnPromise.then((data: [string])=>{
      console.log('data',data);
      this.carList = data;
    })
    .catch((err)=>{
      console.log("error in fetching data");
    });
}



  public clickHandler(inputElem) {
    console.log(inputElem.value);
    this.showUserInput = true;
    this.userInput = inputElem.value;
    setTimeout(() => {
      this.showUserInput = false
    }, 3000);
  }

  private removeCarItem(index) {
    console.log(index);
    this.carList.splice(index, 1);
  }
}
