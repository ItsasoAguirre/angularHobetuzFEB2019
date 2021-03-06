import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' /* se añado en angular 6,
  es para no tener que añadirlo en el appmodule en providers,
  root es para todos los componentes de este modulo, pero tambien puedes poner explicitamente en los componentes que se puede usar*/
})
export class TodoService {

  tareas: Array<Todo>;

  url = 'http://localhost:8080/todos';

  constructor(private httpClient: HttpClient) {
    this.tareas = [
      new Todo('Pasear a Goku', false, false),
      new Todo('Sacar la basura', false, false)
    ];
   }

   getTodos(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>(this.url);
  }

  addTodo(tarea: Todo): Observable<Array<Todo>> {
    return this.httpClient.post<Array<Todo>>(this.url, tarea);
  }

   /*addTodo(tarea: Todo): Array<Todo> {
    this.tareas = [...this.tareas, tarea];
    /*... Operador de propagacion ->
     crea una nueva lista con la lista antigua y añade la nueva tarea,
     esto es para hacer arrays inmutables, y que se cambia la direccion de memoria con los cambios hechos
    return this.tareas;
}*/



  updateTodo(tarea: Todo): Array<Todo> {

    const todoIndex = this.tareas.indexOf(tarea); // cojo la tarea que queremos
    tarea.terminado = !tarea.terminado; // modifico la tarea
    this.tareas = [ /* creo un nuevo array,
      cogiendo las tareas desde el principio hasta la tarea cambiada ,
      añado la tarea cambiada y pongo el resto de tareas posteriores a la tarea modificada */
      ...this.tareas.slice(0, todoIndex),
      tarea,
      ...this.tareas.slice(todoIndex + 1)
    ];

    return this.tareas;
  }
}
