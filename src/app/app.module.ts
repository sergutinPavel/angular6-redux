// misc
import { environment } from '../environments/environment';
// libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
// store
import { reducers, metaReducers } from './store/reducers';
import { RootEffects } from './store/effects';
// services
import { GeneralService } from './store/services/general.service';
// modules
// import {Routing} from './app.routing';
// components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
