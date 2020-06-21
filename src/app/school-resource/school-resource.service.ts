import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AppGlobals } from '../app.globals'
@Injectable({
  providedIn: 'root'
})
export class SchoolResourceService {

 
  constructor(private http : HttpClient, public globals : AppGlobals) { }
  
  getAllSchools(){
    return this.http.get(this.globals.currentUrl+"/schools");
  }
  createSchool(data){
    return this.http.post<any>(this.globals.currentUrl+"/schools",data);
  }
  updateSchool(data){
    return this.http.put<any>(this.globals.currentUrl+"/schools",data);
  }
  deleteSchool(id){
    return this.http.delete<any>(this.globals.currentUrl+`/schools/${id}`);
  }
}
