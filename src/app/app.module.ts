import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { NavigationComponent } from './components/navigation-component/navigation-component.component';
import { TabComponentComponent } from './components/tab-component/tab-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routingComponents,
    TabComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
