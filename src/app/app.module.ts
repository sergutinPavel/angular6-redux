// misc
import { environment } from '../environments/environment';
// libs
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
} from '@angular/material';
// store
import { reducers, metaReducers } from './store';
import { RootEffects } from './store/root.effects';
// services
import { TokenInterceptor } from './services/token.interceptor';
import { AuthService } from './store/auth/auth.service';
import { GeneralService } from './store/general/general.service';
// modules
import { Routing } from './app.routing';
// components
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './components/layout/app-sidebar/app-sidebar.component';
import { AuthComponent } from './components/auth/module.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PageLayoutComponent } from './components/layout/page-layout/page-layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    PageLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RootEffects,
    // angular material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [
    TokenInterceptor,
    GeneralService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
