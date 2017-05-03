import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LifeformsComponent } from './lifeforms/lifeforms.component';
import { LifeformStatsComponent } from './lifeform-stats/lifeform-stats.component';
import { LifeformService } from './lifeform.service';

@NgModule({
  declarations: [
    AppComponent,
    LifeformsComponent,
    LifeformStatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'lifeforms',
        component: LifeformsComponent
      }
    ])
  ],
  providers: [
    LifeformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
