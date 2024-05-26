import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {
  constructor(private renderer : Renderer2){}
  ngOnInit(): void {
    
    
  }
}
