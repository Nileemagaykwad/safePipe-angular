import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { routing } from './app.routing'
import { NewComponent } from './new/new.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    NewComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
