import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AuthGuard } from './services/auth.guard';
import { DataService } from './services/data.service';
import { ReportService } from './services/report.service';
import { AuthenticationService } from './services/login.service';
import { UpdateService } from './services/update.service';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpModule,
    HttpClientModule,HttpClient
  ],
  providers: [PostService,AuthenticationService,AuthGuard,UpdateService,ReportService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
