import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  courseviewData = () => {

    return this.http.get("http://mylinkurcodesapp.herokuapp.com/getcourses")
  }
}
