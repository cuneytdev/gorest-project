import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ViewedUsersService } from './components/latest-viewed-users/viewed-users.service';
import { StorageService } from './core/storage.service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  title = 'beyn-technology';
}
