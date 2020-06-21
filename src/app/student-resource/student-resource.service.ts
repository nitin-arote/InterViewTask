import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AppGlobals } from '../app.globals'


@Injectable({
  providedIn: 'root'
})
export class StudentResourceService {

  constructor(private http : HttpClient, public globals : AppGlobals) { }
  
  getAllStudents(){
    return this.http.get(this.globals.currentUrl+"/students");
  }
  createStudent(data){
    return this.http.post<any>(this.globals.currentUrl+"/students",data);
  }
  updateStudent(data){
    return this.http.put<any>(this.globals.currentUrl+"/students",data);
  }
  deleteStudent(id){
    return this.http.delete<any>(this.globals.currentUrl+`/students/${id}`);
  }
}
