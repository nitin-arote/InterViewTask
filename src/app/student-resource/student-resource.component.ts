import { Component, OnInit } from '@angular/core';
import { StudentResourceService } from "./student-resource.service";
import { FormBuilder, Validators } from '@angular/forms'
import { AlertOnRightService } from "../alert-on-right/alert-on-right.service";
@Component({
  selector: 'app-student-resource',
  templateUrl: './student-resource.component.html',
  styleUrls: ['./student-resource.component.css']
})
export class StudentResourceComponent implements OnInit {

  constructor(private studentResourceService : StudentResourceService,private formBuilder: FormBuilder,private alertOnRightService : AlertOnRightService) { }
  
  ngOnInit(): void {
    this.getAllStudents();
  }
  
  studentFlag = false
    
  studentData :any = [];
  studentForm = this.formBuilder.group({
    "division": "",
    "dob": "",
    "email": "",
    
    "mobile": "",
    "name": "",
    "schoolName": "",
    "std": ""
  })

  updateStudentForm = this.formBuilder.group({
    "division": "",
    "dob": "",
    "email": "",
    "id" : "",
    "mobile": "",
    "name": "",
    "schoolName": "",
    "std": ""
  })

  getAllStudents(){
   this.studentResourceService.getAllStudents().subscribe(
      res=>{
        console.log(res)
       this.studentData = res
      },
      err =>{
        console.error(err)
      });
  }

  createStudent(){
    this.studentResourceService.createStudent(this.studentForm.value).subscribe(
      res=>{
        console.log(res)
       this.studentData = res;
       this.alertOnRightService.showAlertOnRight("Saved",true)
      },
      err =>{
        console.error(err)
      this.alertOnRightService.showAlertOnRight("Not Saved",false)
      });
  }

  updateStudent(index,data){
    this.updateStudentForm.controls["division"].setValue(data['division'])
    this.updateStudentForm.controls["dob"].setValue(data['dob'])
    this.updateStudentForm.controls["email"].setValue(data['email'])
    this.updateStudentForm.controls["id"].setValue(data['id'])
    this.updateStudentForm.controls["mobile"].setValue(data['mobile'])
    this.updateStudentForm.controls["name"].setValue(data['name'])
    this.updateStudentForm.controls["schoolName"].setValue(data['schoolName'])
    this.updateStudentForm.controls["std"].setValue(data['std'])
    this.studentFlag = true
  }
  UpdateStudentInfo(){
    this.studentResourceService.updateStudent(this.updateStudentForm.value).subscribe(
      res=>{
        console.log(res)
       this.studentData = res;
       this.studentFlag = false
       this.alertOnRightService.showAlertOnRight("Saved",true)
       this.getAllStudents()
      },
      err =>{
        console.error(err)
     this.alertOnRightService.showAlertOnRight("Not Saved",false)
      });
  }
  deleteStudent(id,data){

    this.studentResourceService.deleteStudent(this.studentData[id].id).subscribe(
      res=>{
        console.log(res)
        this.studentData.splice([id - 1], 1);
        this.alertOnRightService.showAlertOnRight("Saved",true)
      },
      err =>{
        console.error(err)
      this.alertOnRightService.showAlertOnRight("Not Saved",false)
      });
  }
  

} 
