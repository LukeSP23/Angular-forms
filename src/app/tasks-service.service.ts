import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor( private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });
    const options = { headers: headers };

    return this.http.get<Task[]>('http://localhost:3000/tasks', options);
  }

  addTask(form: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'application/json'
    });
    const options = { headers: headers };
    
    return this.http.post('http://localhost:3000/tasks', JSON.stringify(form), options);
  }
}
