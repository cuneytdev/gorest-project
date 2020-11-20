import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ViewedUsersService } from 'src/app/components/latest-viewed-users/viewed-users.service';
import { StorageService } from 'src/app/core/storage.service';
import { User } from 'src/app/models/user.interface';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  currentPage: any;
  subscriptions: Subscription[] = [];
  users: User[] = [];
  totalRecords: number;
  searchedUser: string;
  constructor(
    private usersService: UsersService,
    private route: Router,
    private latestViewedUsers: ViewedUsersService,
    private storageService: StorageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.usersService.getUsers(1);
    this.subscriptions.push(
      this.usersService.users.subscribe((resp) => {
        this.users = resp;
      })
    );
    this.subscriptions.push(
      this.usersService.amountData.subscribe((amount) => {
        this.totalRecords = amount;
      })
    );
    this.subscriptions.push(
      this.latestViewedUsers.onViewPostClick.subscribe((user: User) => {
        this.onViewPostClick(user);
      })
    );
  }

  pageChanged(event: any) {
    this.usersService.getUsers(event.page, this.searchedUser);
  }

  onFilter() {
    this.usersService.getUsers(1, this.searchedUser);
  }

  async onViewPostClick(user: User) {
    await this.storageService.setItem('userInfo', user);
    this.route.navigate([`posts/${user.id}`]);
    this.latestViewedUsers.add(user);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
