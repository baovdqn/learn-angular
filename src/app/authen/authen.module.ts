import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenComponent } from './authen.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthenRoutes } from './authen.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenRoutes,
    ReactiveFormsModule,
    DragDropModule
  ],
  declarations: [AuthenComponent, LoginComponent]
})
export class AuthenModule { }
