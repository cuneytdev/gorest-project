import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/storage.service';
import { User } from 'src/app/models/user.interface';
import { ViewedUsersService } from './viewed-users.service';

@Component({
  selector: 'app-latest-viewed-users',
  templateUrl: './latest-viewed-users.component.html',
  styleUrls: ['./latest-viewed-users.component.scss'],
})
export class LatestViewedUsersComponent implements OnInit {
  viewedUsers: Array<User> = new Array<User>(5);
  constructor(
    private viewedUsersService: ViewedUsersService) {}
  

  async ngOnInit(): Promise<void> {
    this.viewedUsersService.viewedUsers.subscribe((users: User[]) => {
      this.viewedUsers = users;
    });
  }

  async onViewPostClick(user: User){
    this.viewedUsersService.onViewPostClick.emit(user);
  }
}
