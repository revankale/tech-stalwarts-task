import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatisticsSectionComponent } from './components/statistics-section/statistics-section.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { AiMlSectionComponent } from './components/ai-ml-section/ai-ml-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatisticsSectionComponent,
    TabContentComponent,
    ServiceSectionComponent,
    AiMlSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
