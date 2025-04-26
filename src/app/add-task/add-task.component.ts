import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksServiceService } from '../tasks-service.service';
import { Task } from '../task';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    priority_level: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    progress_level: new FormControl('', [Validators.required]),
  });

  constructor(
    private service: TasksServiceService,
    private router: Router
  ) {}

  get title() {
    return this.form.get('title');
  }
  get description() {
    return this.form.get('description');
  }

  get date() {
    return this.form.get('date');
  }

  get time() {
    return this.form.get('time');
  }

  get priority_level() {
    return this.form.get('priority_level');
  }

  get category() {
    return this.form.get('category');
  }

  get progress_level() {
    return this.form.get('progress_level');
  }

  addTask() {
    let x = <Task>this.form.value;
    (x.time = x.date + ' '), this.time!.value;
    this.service.addTask(x).subscribe(
      (result: any) => {
        console.log(result.task.title + ' has been added sucessfully');
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
    this.form.reset();
    this.router.navigate(['home']);
  }

}
