import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { MemberComponentComponent } from './member-component/member-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthorisedSideNavServiceService } from './authorised-side-nav-service.service';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { DataService } from './data.service';
import { UpdateComponent } from './update/update.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponentComponent,
    AdminComponentComponent,
    MemberComponentComponent,
    SearchComponent,
    CreateComponent,
    UpdateComponent,
    ContactUsComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthorisedSideNavServiceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
