import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { SchoolResourceService } from "./school-resource.service";
import { AlertOnRightService } from "../alert-on-right/alert-on-right.service";
@Component({
  selector: 'app-school-resource',
  templateUrl: './school-resource.component.html',
  styleUrls: ['./school-resource.component.css']
})
export class SchoolResourceComponent implements OnInit {

  constructor(private schoolResourceService : SchoolResourceService,private formBuilder: FormBuilder,private alertOnRightService : AlertOnRightService) { }
  schoolFlag = false
  schoolForm = this.formBuilder.group({  
    "addressLine1": "",
    "addressLine2": "",
    "city": "",
    "district": "",
    // "id": "",
    "locality": "",
    "schoolName": "",
    "state": "" 
  })
  UpdateschoolForm = this.formBuilder.group({  
    "addressLine1": "",
    "addressLine2": "",
    "city": "",
    "district": "",
    "id": "",
    "locality": "",
    "schoolName": "",
    "state": "" 
  })
  ngOnInit(): void {
    this.getAllStudents();
  }
  
  schoolData :any = [];

  getAllStudents(){
   this.schoolResourceService.getAllSchools().subscribe(
      res=>{
        console.log(res)
       this.schoolData = res
      },
      err =>{
        console.error(err)
      });
  }

  createStudent(){
    this.schoolResourceService.createSchool(this.schoolForm.value).subscribe(
      res=>{
        console.log(res)
        this.alertOnRightService.showAlertOnRight("Saved",true)
       this.getAllStudents()
      },
      err =>{
        console.error(err)
      this.alertOnRightService.showAlertOnRight("Not Saved",false)
      });
  }

  UpdateSchool(index,data){
    this.UpdateschoolForm.controls['addressLine1'].setValue(data['addressLine1'])
    this.UpdateschoolForm.controls['addressLine2'].setValue(data['addressLine2'])
    this.UpdateschoolForm.controls['city'].setValue(data['city'])
    this.UpdateschoolForm.controls['district'].setValue(data['district'])
    this.UpdateschoolForm.controls['id'].setValue(data['id'])
    this.UpdateschoolForm.controls['locality'].setValue(data['locality'])
    this.UpdateschoolForm.controls['schoolName'].setValue(data['schoolName'])
    this.UpdateschoolForm.controls['state'].setValue(data['state'])
    this.schoolFlag = true
  }
  UpdateSchoolInfo(){
    this.schoolResourceService.updateSchool(this.UpdateschoolForm.value).subscribe(
      res=>{
      console.log(res)
       this.schoolFlag = false
       this.alertOnRightService.showAlertOnRight("Saved",true)
       this.getAllStudents()
      },
      err =>{
        console.error(err)
      this.alertOnRightService.showAlertOnRight("Not Saved",false)
      });
  } 

  deleteSchool(id,data){
    this.schoolResourceService.deleteSchool( this.schoolData[id].id).subscribe(
      res=>{
        console.log(res)
        this.schoolData.splice([id], 1);
        this.alertOnRightService.showAlertOnRight("Saved",true)
      },
      err =>{
        console.error(err)
      this.alertOnRightService.showAlertOnRight("Not Saved",false)
      });
  }
  
}
