import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestViewedUsersComponent } from './components/latest-viewed-users/latest-viewed-users.component';
import { UsersComponent } from './screens/users/users.component';
import { UserPostsComponent } from './screens/user-posts/user-posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ErrorHandlerInterceptor } from './core/http/http-error.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './core/http/loader.interteceptor';
import { HeaderComponent } from './components/header/header.component';

const NGX_MODULES = [
  PaginationModule.forRoot(), 
  AlertModule.forRoot()
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LatestViewedUsersComponent,
    UsersComponent,
    UserPostsComponent,
    AlertComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...NGX_MODULES,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: LoaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
