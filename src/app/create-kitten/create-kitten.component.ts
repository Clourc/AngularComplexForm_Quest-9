import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})

export class CreateKittenComponent {
  newKitty: Kitten = new Kitten('', '', new Date(), '');
  @Output() sendNewKitty: EventEmitter<Kitten> = new EventEmitter();
  
  onSubmit(){
    console.log('Form submitted');
    console.log(this.newKitty)
    this.sendNewKitty.emit(this.newKitty);
  }

  randomImage(){
    console.log('click');
    const width = Math.floor(Math.random() * (250-150) + 150);
    const height = Math.floor(Math.random() * (250-150) + 150);
    this.newKitty.photoLink = `https://placekitten.com/${width}/${height}`
  }
}
