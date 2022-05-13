import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FundraisingComponent } from './pages/gigDetails/fundraising/fundraising.component';
import { SingleVolunterComponent } from './pages/gigDetails/single-volunter/single-volunter.component';
import { MultiVolunterComponent } from './pages/active-gigDetails/multi-volunter/multi-volunter.component';

@NgModule({
  declarations: [
    AppComponent,
    FundraisingComponent,
    SingleVolunterComponent,
    MultiVolunterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
