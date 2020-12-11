import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateComponent } from './create/create.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MemberComponentComponent } from './member-component/member-component.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'contact-us', component: ContactUsComponent },
{ path: 'feedback-form', component: FeedbackFormComponent },
{ path: 'login', component: LoginComponent },
{ path: 'admin', component: AdminComponentComponent },
{ path: 'member', component: MemberComponentComponent },
{ path: 'search', component: SearchComponent },
{ path: 'create', component: CreateComponent },
{ path: 'update', component: UpdateComponent },
{path:'',redirectTo:'/home',pathMatch:'full'}
];
  // , { path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
