import { Component, OnInit, Input } from '@angular/core';
import { ListsService, List } from './../../services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  
  lists: any = {}
  
  constructor(private _listsService: ListsService,
    private activatedRoute: ActivatedRoute) {
      
      this.activatedRoute.params.subscribe( params => {
        this.lists = this._listsService.getIdList(params['id']);
      });
      
    }

  ngOnInit() {
  }  

  checking = () => {
    let checkbox: any = document.getElementsByClassName('mat-checkbox-checked');
    let progress = document.getElementById('progress')
    let val: number;
    let valor: number;
    setTimeout( ()=> {
    for (let i= 0; i < checkbox.length; i++) {
      val = i;
    };
      valor = val + 1;
      console.log(valor);
    },50 )
  }

}
