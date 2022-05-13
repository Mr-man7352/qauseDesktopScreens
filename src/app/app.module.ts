import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FundraisingComponent } from './pages/gigDetails/fundraising/fundraising.component';
import { SingleVolunterComponent } from './pages/gigDetails/single-volunter/single-volunter.component';
import { MultiVolunterComponent } from './pages/gigDetails/multi-volunter/multi-volunter.component';
import { ActiveMultiVolunterComponent } from './pages/active-gigDetails/multi-volunter/multi-volunter.component';
import { ActiveFundraisingComponent } from './pages/active-gigDetails/fundraising/fundraising.component';
import { ActiveSingleVolunterComponent } from './pages/active-gigDetails/single-volunter/single-volunter.component';

@NgModule({
  declarations: [
    AppComponent,
    FundraisingComponent,
    SingleVolunterComponent,
    MultiVolunterComponent,
    ActiveFundraisingComponent,
    ActiveMultiVolunterComponent,
    ActiveSingleVolunterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
