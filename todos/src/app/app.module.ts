import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TerminadaPipe } from './pipes/terminada.pipe';
import { ImportantePipe } from './pipes/importante.pipe';


// Decorador
@NgModule({
  // Las declaraciones (componentes, servicios y pipes)q tiene este componente
  declarations: [
    AppComponent,
    TodoComponent,
    TerminadaPipe,
    ImportantePipe

  ],
  // Las importaciones necesarias para todos los componentes de la aplicacion
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  // Todos los servicios que utilicen nuestros componentes
  providers: [],
  // Esta linea indica que nuestra aplicacion se arrancar el componente inidicado
  bootstrap: [AppComponent]
})
export class AppModule { }
