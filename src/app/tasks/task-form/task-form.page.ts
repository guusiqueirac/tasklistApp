import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit {

  task: Task = new Task();
  title: string = "Nova Tarefa";

  constructor(private taskService: TaskService,
              private activetedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.activetedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alterando Tarefa';
    }
  }

  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['/']);
  }

}
