import { Component, OnInit,Input } from '@angular/core';
import {Item} from '../../interfaces/item';
@Component({
  selector: 'app-detailitem',
  templateUrl: './detailitem.component.html',
  styleUrls: ['./detailitem.component.css']
})
export class DetailitemComponent implements OnInit {
  @Input() Inputitem:Item;
  constructor() { }

  ngOnInit() {
  }

}
