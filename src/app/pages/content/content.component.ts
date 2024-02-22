import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
      )
  }
}
