import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryComponent } from './memory/memory.component';
import { LearnComponent } from './learn/learn.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
