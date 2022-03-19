import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchoComponent } from './echo/echo.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'echo', component: EchoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
