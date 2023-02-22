import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// pages
import { HomeComponent } from './pages/home/home.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TodoListComponent,
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
