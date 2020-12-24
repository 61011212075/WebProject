import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {ToolbarModule} from 'primeng/toolbar';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {InputTextModule} from 'primeng/inputtext';
import { RegisterComponent } from './register/register.component';
import {Routes,RouterModule} from '@angular/router';

const appRoutes :Routes = [
  {path:'register',component:RegisterComponent},
  {path:'' ,component:LoginComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    InputTextModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
