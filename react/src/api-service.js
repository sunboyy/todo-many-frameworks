import axios from 'axios';
import { SessionService } from './session-service';

const API_URL = 'http://localhost:3000';

export class ApiService {
  static signIn(username, password) {
    return axios.post(API_URL + '/sign-in', { username, password });
  }

  static getAllTodos() {
    return axios.get(API_URL + '/todos', getRequestOptions());
  }

  static createTodo(todo) {
    return axios.post(API_URL + '/todos', todo, getRequestOptions());
  }

  static getTodoByID(id) {
    return axios.get(API_URL + '/todos/' + id, getRequestOptions());
  }

  static updateTodo(todo) {
    return axios.put(API_URL + '/todos/' + todo.id, todo, getRequestOptions());
  }

  static deleteTodoByID(id) {
    return axios.delete(API_URL + '/todos/' + id, getRequestOptions());
  }
}

function getRequestOptions() {
  return {
    headers: {
      Authorization: 'Bearer ' + SessionService.getAccessToken()
    }
  };
}
