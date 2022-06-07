import { Component, OnInit } from '@angular/core';
import { mediaInterface } from './../../models/mediaInterfaces';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
 public mediaInfo: mediaInterface;
 public falsei:number=1
  constructor(){
    this.mediaInfo = {
      title: "Los 5 mas populares -HOY",
      films: [{
        src: "../assets/images/Top10/1-papel.webp",
        alt: "La casa de papel"
      },
      {
        src: "../assets/images/Top10/2-reina.webp",
        alt: "La reina del flow"
      },
      {
        src: "../assets/images/Top10/3-titanes.webp",
        alt: "Titanes"
      },
      {
        src: "../assets/images/Top10/4-lostinspace.webp",
        alt: "Lost ins space"
      },
      {
        src: "../assets/images/Top10/8-ricos.webp",
        alt: "Ricos y mamados"
      }]
    }
  }

  ngOnInit(): void {
  }

}
