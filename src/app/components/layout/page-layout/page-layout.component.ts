import {Component, OnInit, OnDestroy} from '@angular/core';
import {ToggleSidebarAction} from '../../../store/general/general.actions';
import {Observable, Subscription} from 'rxjs/index';
import {Store} from '@ngrx/store';
import {State, selectExpandSidebar} from '../../../store';
import {LogoutAction} from '../../../store/auth/auth.actions';


@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit, OnDestroy {
  subs: { [name: string]: Subscription } = {};
  expandSidebar$: Observable<any>;
  expandSidebar: boolean;

  constructor(private _store: Store<State>) {
    this.expandSidebar$ = this._store.select(selectExpandSidebar);
    // .pipe(filter(x => !!x))
    this.subs.expandSidebar = this.expandSidebar$.subscribe(x => {
      this.expandSidebar = x;
      // console.warn('this.expandSidebar$', x);
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    Object.keys(this.subs).forEach(s => this.subs[s].unsubscribe());
  }

  toggleSidebar(v?: undefined | boolean): void {
    this._store.dispatch(new ToggleSidebarAction(v));
  }

  logout() {
    this._store.dispatch(new LogoutAction);
  }

}
