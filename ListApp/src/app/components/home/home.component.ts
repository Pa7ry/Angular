import { Component, OnInit } from '@angular/core';
import { ListsService, List } from './../../services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  lists: List[] = []
  nombre: string = 'Gianmarco';
  columnsDisplay: any = ['titulos'];

  constructor(private _listsService: ListsService) { }

  ngOnInit() {
    this.lists = this._listsService.getList();
  }

}
