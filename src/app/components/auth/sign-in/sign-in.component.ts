import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../store/auth/auth.service';
import {Store} from '@ngrx/store';
import {State} from '../../../store';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  subs: {[name: string]: Subscription} = {};
  public signInForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<State>
  ) {
    this.signInForm = this._fb.group({
      email: [''],
      password: [''],
    });
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

    // todo: dispatch action from store
    // this.subs.email = this._authService.signIn(email, password).subscribe(v => {
    //   console.log('onSubmit, result', v);
    // });
  }

}
