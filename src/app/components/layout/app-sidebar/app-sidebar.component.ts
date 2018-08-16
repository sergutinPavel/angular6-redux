import { Component, OnInit } from '@angular/core';
import {selectExpandSidebar, State} from '../../../store';
import {Store} from '@ngrx/store';
import {ToggleSidebarAction} from '../../../store/general/general.actions';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {
  public expandSidebar$: Observable<boolean>;

  constructor(private _store: Store<State>) {
    this.expandSidebar$ = this._store.select(selectExpandSidebar);
  }

  ngOnInit() {
  }

  toggleSidebar(v?: undefined | boolean): void {
    this._store.dispatch(new ToggleSidebarAction(v));
  }

}
