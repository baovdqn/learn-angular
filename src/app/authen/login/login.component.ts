import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin: boolean = false;
  dataLogin: Data[];
  colsData = ['STT', 'Name', 'Date of birth'];

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.initForm();
    this.dataService.getData().subscribe((res: Data[]) => this.dataLogin = res);
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login() {

    console.log(this.loginForm.value)
    if (this.isLogin) {
      this.isLogin = !this.isLogin
    } else {
      this.isLogin = !!this.loginForm.value;
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.dataLogin, event.previousIndex, event.currentIndex);
    console.log(this.dataLogin);
    this.dataService.postData(this.dataLogin).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }

}

export interface Data {
  createdAt: string;
  name: string;
  avatar: string;
  dateOfBirth: number;
  id: string;
};
