import { Component } from '@angular/core';
import { filmsInterface } from './models/mediaInterfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public accion: filmsInterface = {
  title: "Accion",
  films: [{
    src: "../assets/images/Accion/ejercitomuertos.jpg",
    alt: "Ejército de los muertos"
  },
  {
    src: "../assets/images/Accion/elprotector.webp",
    alt: "El protector"
  },
  {
    src: "../assets/images/Accion/equalizer2.webp",
    alt: "Equalizador 2"
  },
  {
    src: "../assets/images/Accion/heat.webp",
    alt: "Heat"
  },
  {
    src: "../assets/images/Accion/jackreacher.webp",
    alt: "Jack reacher"
  },
  {
    src: "../assets/images/Accion/johnwick2.webp",
    alt: "John wick 2"
  },
  {
    src: "../assets/images/Accion/killbill2.webp",
    alt: "Kill Bill 2"
  },
  {
    src: "../assets/images/Accion/misionimposiblenacion.webp",
    alt: "Mision Imposible"
  },
  {
    src: "../assets/images/Accion/renacido.webp",
    alt: "Renacido"
  },
  {
    src: "../assets/images/Accion/terminator2.webp",
    alt: "Terminator 2"
  },
  {
    src: "../assets/images/Accion/worldwarz.webp",
    alt: "Worldwarz"
  }]
};

public anime: filmsInterface = {
  title: "Anime",
  films: [{
    src: "../assets/images/Anime/ajin.jpg",
    alt: "Ajin"
  },
  {
    src: "../assets/images/Anime/castilloambulante.webp",
    alt: "El castillo ambulante"
  },
  {
    src: "../assets/images/Anime/chihiro.webp",
    alt: "Chihiro"
  },
  {
    src: "../assets/images/Anime/gitsarise.webp",
    alt: "Git sarise"
  },
  {
    src: "../assets/images/Anime/gundam.webp",
    alt: "Gundam "
  },
  {
    src: "../assets/images/Anime/evangelion.webp",
    alt: "Evangelion"
  },
  {
    src: "../assets/images/Anime/laputa.webp",
    alt: "La puta"
  },
  {
    src: "../assets/images/Anime/mononoke.webp",
    alt: "Mononoke"
  },
  {
    src: "../assets/images/Anime/ninokuni.jpg",
    alt: "Nino kuni"
  },
  {
    src: "../assets/images/Anime/perfectblue.webp",
    alt: "Perfect blue"
  },
  {
    src: "../assets/images/Anime/porcorosso.webp",
    alt: "Por corosso"
  }]
};public comedia: filmsInterface = {
  title: "Comedia",
  films: [{
    src: "../assets/images/Comedia/casi300.webp",
    alt: "Casi 300"
  },
  {
    src: "../assets/images/Comedia/cazafantasmas.webp",
    alt: "Cazafantasmas"
  },
  {
    src: "../assets/images/Comedia/dictador.webp",
    alt: "Dictador"
  },
  {
    src: "../assets/images/Comedia/erasehollywood.webp",
    alt: "erase hollywood"
  },
  {
    src: "../assets/images/Comedia/familyguy.webp",
    alt: "Family Guy "
  },
  {
    src: "../assets/images/Comedia/juerga.webp",
    alt: "Juerga"
  },
  {
    src: "../assets/images/Comedia/laterminal.webp",
    alt: "La terminal"
  },
  {
    src: "../assets/images/Comedia/padresella.webp",
    alt: "Padre Sella"
  },
  {
    src: "../assets/images/Comedia/regresofuturo.webp",
    alt: "regreso futuro"
  },
  {
    src: "../assets/images/Comedia/rickandmorty.webp",
    alt: "rickandmorty"
  },
  {
    src: "../assets/images/Comedia/scarymovie3.webp",
    alt: "Scary Movie 3"
  }]
};public drama: filmsInterface = {
  title: "Drama",
  films: [{
    src: "../assets/images/Drama/1917.webp",
    alt: "1917"
  },
  {
    src: "../assets/images/Drama/arrival.webp",
    alt: "Arrival"
  },
  {
    src: "../assets/images/Drama/clublucha.webp",
    alt: "El club de la lucha"
  },
  {
    src: "../assets/images/Drama/corazones.webp",
    alt: "Corazones"
  },
  {
    src: "../assets/images/Drama/culpable.jpg",
    alt: "Culpable "
  },
  {
    src: "../assets/images/Drama/millaverde.webp",
    alt: "La milla verde"
  },
  {
    src: "../assets/images/Drama/naufrago.webp",
    alt: "Naufrago"
  },
  {
    src: "../assets/images/Drama/noespais.webp",
    alt: "No es pais"
  },
  {
    src: "../assets/images/Drama/salvaralsoldado.webp",
    alt: "Salvar al soldado ryan"
  },
  {
    src: "../assets/images/Drama/scarface.webp",
    alt: "Scarface"
  },
  {
    src: "../assets/images/Drama/schindler.webp",
    alt: "Schindler"
  }
  ]
};public scifi: filmsInterface = {
  title: "Sci-fi",
  films: [{
    src: "../assets/images/Sci-fi/6dia.webp",
    alt: "6 dia"
  },
  {
    src: "../assets/images/Sci-fi/12monos.webp",
    alt: "12 monos"
  },
  {
    src: "./assets/images/Sci-fi/afterearth.webp",
    alt: "After earth"
  },
  {
    src: "./assets/images/Sci-fi/colverparadox.jpg",
    alt: "colver"
  },
  {
    src: "./assets/images/Sci-fi/core.webp",
    alt: "Core "
  },
  {
    src: "./assets/images/Sci-fi/deepimpact.webp",
    alt: "Deep impact"
  },
  {
    src: "./assets/images/Sci-fi/doom.webp",
    alt: "Doom"
  },
  {
    src: "./assets/images/Sci-fi/gits.webp",
    alt: "Gits"
  },
  {
    src: "./assets/images/Sci-fi/jumper.webp",
    alt: "Jumper"
  },
  {
    src: "./assets/images/Sci-fi/passengers.webp",
    alt: "Passenger"
  },
  {
    src: "./assets/images/Sci-fi/startrek.webp",
    alt: "Star trek"
  },
  {
    src: "./assets/images/Sci-fi/transformers.webp",
    alt: "Transformers"
  },
  {
    src: "./assets/images/Sci-fi/watchmen.webp",
    alt: "Watchmen"
  }
  ]
};public terror: filmsInterface = {
  title: "Terror",
  films: [{
    src: "../assets/images/Terror/apostol.jpg",
    alt: "Apostol"
  },
  {
    src: "../assets/images/Terror/calleterror.jpg",
    alt: "Calle terror"
  },
  {
    src: "../assets/images/Terror/infiernoagua.webp",
    alt: "Infierno Agua"
  },
  {
    src: "../assets/images/Terror/insidious2.webp",
    alt: "Insidious"
  },
  {
    src: "../assets/images/Terror/life.webp",
    alt: "Life "
  },
  {
    src: "../assets/images/Terror/malasana.webp",
    alt: "Malasaña"
  },
  {
    src: "../assets/images/Terror/multiple.webp",
    alt: "Multiple"
  },
  {
    src: "../assets/images/Terror/reflejos.webp",
    alt: "Reflejos"
  },
  {
    src: "./assets/images/Sci-fi/jumper.webp",
    alt: "Jumper"
  }
  ]
}
}

