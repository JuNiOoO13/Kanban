import { Component, ViewChild, ViewContainerRef, viewChild } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  @ViewChild('column',  {read : ViewContainerRef})
  private container! : ViewContainerRef;

  onCreateTag(){
    console.log(this.container)
    this.container.createComponent(TagComponent);
  }
}
