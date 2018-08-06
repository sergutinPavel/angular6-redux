import {Component, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectExpandSidebar } from './store/reducers/';
import {Observable, Subscription} from 'rxjs/index';
import {filter} from 'rxjs/internal/operators';
import {GetTestDataAction, ToggleSidebarAction} from './store/actions/general.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  subs: {[name: string]: Subscription} = {};
  expandSidebar$: Observable<boolean>;
  expandSidebar: boolean;
  constructor(private _store: Store<State>) {
    this.expandSidebar$ = this._store.select(selectExpandSidebar);
  // .pipe(filter(x => !!x))
    this.subs.expandSidebar = this.expandSidebar$.subscribe(x => {
      this.expandSidebar = x;
      // console.warn('this.expandSidebar$', x);
    });
  }
  ngOnDestroy() {
    Object.keys(this.subs).forEach(s => this.subs[s].unsubscribe());
  }

  toggleSidebar(v?: undefined | boolean): void {
    this._store.dispatch(new ToggleSidebarAction(v));
  }

  getTestData() {
    this._store.dispatch(new GetTestDataAction());
  }
}
