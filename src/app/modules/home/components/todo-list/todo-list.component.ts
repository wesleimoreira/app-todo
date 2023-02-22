import { Component, DoCheck } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]");

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public setLocalStorage(): void {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Você deseja realmente deletar duto!");
    (confirm) ? this.taskList = [] : null;
  }

  public setEmitTaskList(event: string): void {
    (event) ? this.taskList.push({ task: event, checked: false }) : null;
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia deseja deletar!");
      (confirm) ? this.deleteItemTaskList(index) : null;
    }
  }
}
