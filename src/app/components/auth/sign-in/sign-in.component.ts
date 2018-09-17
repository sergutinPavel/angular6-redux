import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../../store/auth/auth.service';
import {Store} from '@ngrx/store';
import {State, selectUserStatus} from '../../../store';
import {SignInAction} from '../../../store/auth/auth.actions';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  public subs: { [name: string]: Subscription } = {};
  public userStatus: Observable<any>;
  public signInForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _store: Store<State>) {
    this.signInForm = this._fb.group({
      email: [''],
      password: [''],
    });
    this.userStatus = this._store.select(selectUserStatus);
  }

  ngOnInit() {
    this.subs.signInFormChange = this.signInForm.valueChanges.subscribe(v => {
      // console.warn('v', v);
    });
  }

  ngOnDestroy() {
    Object.keys(this.subs).forEach(s => this.subs[s].unsubscribe());
  }

  onSubmit(form): void {
    const email: string = this.signInForm.get('email').value.trim();
    const password: string = this.signInForm.get('password').value.trim();

    this._store.dispatch(new SignInAction({email, password}));
  }

}
