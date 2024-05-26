import { Component, OnInit } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  public dir : string ;
  private id : string;
  constructor(){
    this.id = "addTag";
    this.dir = "/src/img/test.jpg";
  }
  
  
  ngOnInit(): void {

  }

}
