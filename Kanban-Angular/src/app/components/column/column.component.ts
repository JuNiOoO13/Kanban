import { Component, ViewChild, ViewContainerRef, model, viewChild } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CardModel } from '../../Models/card-model';
import { UserModel } from '../../Models/user-model';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [TagComponent,CommonModule],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  public items:CardModel[] = [] 
  private container! : ViewContainerRef;

  onCreateTag(){
    let user = new UserModel("Junior");
    let card : CardModel = new CardModel('nome',new Date,"ola mundo")
    card.user.push(user);
    this.items.push(card);
  }
}
