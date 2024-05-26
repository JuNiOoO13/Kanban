import { Component, OnInit, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TagComponent } from '../tag/tag.component';
import { ColumnComponent } from '../column/column.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,TagComponent,ColumnComponent,SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private renderer : Renderer2){}
  ngOnInit(): void 
  {
    this.renderer.listen(document.body,"dragstart", (e) => {
      const element: Element = e.target;
      element.classList.add("dragging");
    });
    
    this.renderer.listen(document.body,"dragend", (e) => {
      const element: Element = e.target;
      element.classList.remove("dragging");
    });
    
    const columns : NodeListOf<Element> = document.querySelectorAll(".column > .content");
    columns.forEach((item) => {
    
     this.renderer.listen(item, "dragover",(e) => {
      e.preventDefault();
      const dragging : Element = document.querySelector(".dragging")!;
      const applyAfter : Element | undefined = this.getNewPositionY(item, e.clientY);
      if (applyAfter) applyAfter.insertAdjacentElement("afterend", dragging);
      else item.prepend(dragging);
      
     });})
  }
  getNewPositionY(column: Element, posY:number) : Element | undefined {
    const cards = Array.from(column.querySelectorAll("li:not(.dragging)"));
    let result;
  
    for (let refer_card of cards) {
      const box = refer_card.getBoundingClientRect();
      const boxCenterY = box.y + box.height / 2;
  
      if (posY >= boxCenterY) result = refer_card;
    }
  
    return result;
  }
}
