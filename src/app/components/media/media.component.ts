import { Component, Input, OnInit } from '@angular/core';
import { filmsInterface } from 'src/app/models/mediaInterfaces';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
@Input() public films!: filmsInterface;


  constructor() { }

  ngOnInit(): void {
  }

}
