import { Component, OnInit } from '@angular/core';
import { FilterType } from '../filter-type';
import { Todo } from '../todo';

function generateId(){
  return Math.random().toString(16);
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = 'Prueba de todos';
  list: Todo[] = [];
  filterType = FilterType;
  filterBy: FilterType = FilterType.All;
  filterList: Todo[] = this.list;

  
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(event: SubmitEvent){
    event.preventDefault();
    const target = <HTMLFormElement>event.currentTarget;
    const data = new FormData(target);
    const task = data.get('task')?.toString();
    if(task){
      this.list.push({id: generateId(), task, isCompleted: false});
    }
  }

  toggleTodo(id: string, isCompleted: boolean){
    this.list = this.list.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          isCompleted: isCompleted,
        }
      }
      return todo;
    });
  }

  deleteTodo(id: string){
    this.list = this.list.filter((todo) => todo.id !== id);
  }

  filterTodosBy(filterType: FilterType){
    switch(filterType){
      case FilterType.Active:
        this.filterList = this.list.filter((todo) => !todo.isCompleted);
        break;
      case FilterType.Completed:
        this.filterList = this.list.filter((todo) => !todo.isCompleted);
        break;
      default:
        this.filterList = this.list;
        break;        
    }
  }


}
