import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})

export class UserKittenComponent implements OnChanges{
  userKittenList: Kitten[] = [
    new Kitten('Bob', 'Bombay', new Date(), 'https://placekitten.com/230/320'),
    new Kitten('Brigand', 'Maine Coon', new Date(), 'https://placekitten.com/200/320')
  ];
  
  @Input() newUserKitty!: Kitten;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
      if(JSON.stringify(changes['newUserKitty']['previousValue']) !== JSON.stringify(changes['newUserKitty']['currentValue'])){
        this.userKittenList.push(this.newUserKitty);
      }
  }
}