// misc
import { environment } from '../environments/environment';
// libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
// store
import { reducers, metaReducers } from './store';
import { RootEffects } from './store/root.effects';
// services
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
    HttpClientModule,
    Routing,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RootEffects,
    // Routing
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
