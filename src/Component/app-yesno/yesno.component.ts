import { Component, Input } from '@angular/core';
import { yesnoResponse } from '../../Model/yesnoResponse';

@Component({

  selector: 'app-yesno',
  templateUrl : './yesno.component.html'
})

export class YesNoComponent{
  title = 'yesno';
  @Input() private response: yesnoResponse= {
   
    answer: '',
    image: ''
  };

}