import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { WallComponent } from './components/wall/wall.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';

const routeConfig:Route[]=[
  {
    path:'',
    component:WallComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent,
    canActivate:[AuthGuard]
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    WallComponent,
    RegisterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService,AuthService,AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
