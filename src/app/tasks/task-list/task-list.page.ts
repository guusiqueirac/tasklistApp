import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  tasks: Task [] = [];

  constructor(private taskService: TaskService,
              public router: Router) { }

  ngOnInit() {
   this.tasks = this.taskService.getAll();
  }

  novaTarefa(task: Task) {

  }

  editarTarefa() {

  }

  removerTarefa() {

  }

}
