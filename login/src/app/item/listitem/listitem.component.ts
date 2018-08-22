import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router} from '@angular/router';
import { Item } from '../../interfaces/item';
@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css'],
  providers: [DataService]
})
export class ListitemComponent implements OnInit {

  public listitem;
  public containeritem:Item;

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    this.dataservice.getItem().subscribe(
      res =>{
        this.listitem = res.data[1];
      },
      err =>{
        console.log("There is an error : "+err);
      }
    )
  }
  onSelect(item:Item){
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['/login']);
  }
    this.containeritem = item;
  }
  
}
