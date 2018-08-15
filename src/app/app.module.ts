import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';  
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NguiAutoCompleteModule } from '@ngui/auto-complete'; 

import { LoginComponent }  from  './login/login';  
import { DashComponent }   from './dash/dash';
import { HomeComponent } from './home/home';
import { Addproduct } from './product/add_product';
import { Updateproduct } from './product/update_product';

import { AuthGuard } from './services/auth.guard';
import { DataService } from './services/data.service';
import { ReportService } from './services/report.service';
import { AuthenticationService } from './services/login.service';
import { UpdateService } from './services/update.service';
import { PostService } from './services/post.service';
import {  
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule
  
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,DashComponent,HomeComponent,Addproduct,Updateproduct
  ],
  imports: [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule,
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,NguiAutoCompleteModule,
    FormsModule,ReactiveFormsModule,HttpModule,
    HttpClientModule
  ],
  providers: [PostService,AuthenticationService,AuthGuard,UpdateService,ReportService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
