import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private service: TasksServiceService) { }
    
  ngOnInit() {
    this.service.getTasks().subscribe({
      next: (result: Task[]) => {
        this.tasks = result;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to load tasks:', err);
      }
    });
  }

}
