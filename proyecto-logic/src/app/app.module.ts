import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { EchoComponent } from './echo/echo.component';
import { EchoInputComponent } from './echo-input/echo-input.component';
import { EchoOuputComponent } from './echo-ouput/echo-ouput.component';
import { EchoService } from './echo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    EchoComponent,
    EchoInputComponent,
    EchoOuputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EchoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
