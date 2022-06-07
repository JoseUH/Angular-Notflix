import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/mediaInterfaces';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public navigatorInfo: NavigatorInterface;
  public btnText: string = "🌞";
  


  constructor() {

    this.navigatorInfo = {
      logo: {
        src: "../assets/images/LOGO/logito.png",
        alt: "Controller Logo"
      },
      links: [{
        text: "inicio",
        link: "#inicio"
      },
      {
        text: "buscar",
        link: "buscar"
      },
      ]
    }
  }

  ngOnInit(): void {
  }
  public cambiarColor(): void {
    document.body.classList.toggle("light-theme");
    this.btnText === "🌞" ? this.btnText = "🌚" : this.btnText = "🌞"}

}
