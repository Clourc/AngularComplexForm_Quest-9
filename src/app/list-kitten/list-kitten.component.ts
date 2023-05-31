import { Component } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  kittenList: Kitten[] = [
    new Kitten('Filou', 'Siamoi', new Date(), 'https://placekitten.com/200/200'),
    new Kitten('Tim', 'Bobtail', new Date(), 'https://placekitten.com/199/200'),
  ];

  adoptingKitty!: Kitten;
  
  onReceiveNewKitty(event: Kitten): void{
    this.kittenList.push(event);
  }
  
  adoptKitty(kitty: Kitten): void{
    this.adoptingKitty = new Kitten(kitty.name, kitty.race, kitty.birthDate, kitty.photoLink)

    const index = this.kittenList.indexOf(kitty)
    this.kittenList.splice(index, 1)
  }
}
