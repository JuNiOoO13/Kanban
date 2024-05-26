import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit {
  @Input() name : string;
  @Input() user : string;
  @Input() test : number;
  @Input() description : string;

  constructor(private renderer : Renderer2){
    this.name = "Criando algo"
    this.user = "Sla"
    this.test = 92
    this.description = "Criando uma coisa"
  }
  ngOnInit(): void {
    
    
  }
}
