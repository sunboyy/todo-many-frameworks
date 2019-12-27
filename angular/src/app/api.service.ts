import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient, private session: SessionService) {}

  public signIn(username: string, password: string): Observable<any> {
    return this.httpClient.post(API_URL + '/sign-in', {
      username,
      password
    });
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(API_URL + '/todos', this.getRequestOptions());
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(API_URL + '/todos', todo, this.getRequestOptions());
  }

  public getTodoByID(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(API_URL + '/todos/' + id, this.getRequestOptions());
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(API_URL + '/todos/' + todo.id, todo, this.getRequestOptions());
  }

  public deleteTodoByID(id: number): Observable<null> {
    return this.httpClient.delete<null>(API_URL + '/todos/' + id, this.getRequestOptions());
  }

  public getRequestOptions() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.session.accessToken
    });
    return { headers: headers };
  }
}
