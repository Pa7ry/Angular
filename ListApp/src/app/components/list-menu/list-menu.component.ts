import { Component, OnInit } from '@angular/core';
import { ListsService, List } from './../../services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styles: []
})
export class ListMenuComponent implements OnInit {

  lists: List[] = []

  constructor(private _listsService: ListsService,
              private router: Router) { }

  ngOnInit() {

    this.lists = this._listsService.getList();
  }

  verList(id: number) {
    console.log('hola');
    this.router.navigate( [ './list/', id ] );
  };

}
