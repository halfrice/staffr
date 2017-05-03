import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LifeformsComponent } from './lifeforms/lifeforms.component';
import { LifeformStatsComponent } from './lifeform-stats/lifeform-stats.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LifeformService } from './lifeform.service';


@NgModule({
  declarations: [
    AppComponent,
    LifeformsComponent,
    LifeformStatsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LifeformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
