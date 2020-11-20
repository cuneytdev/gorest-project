import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/core/storage.service';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewedUsersService{
  private viewedUsersDataSource: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>(new Array<User>(5));
  viewedUsers = this.viewedUsersDataSource.asObservable();

  onViewPostClick = new EventEmitter<User>();
  
  constructor(private storageService: StorageService) {
    this.getInitialValue();
  }
  async getInitialValue(){
    const users: User[] = await this.storageService.getItem("viewedUsers");
    if(!users){
      return;
    }
    this.viewedUsersDataSource.next(users);
  }
  async add(user: User) {
      if(this.viewedUsersDataSource.getValue()[0] && (user.id == this.viewedUsersDataSource.getValue()[0].id)){
        return;
      }
      this.viewedUsersDataSource.getValue().unshift(user)
      this.viewedUsersDataSource.getValue().pop()
      this.viewedUsersDataSource.next(this.viewedUsersDataSource.getValue());
      await this.storageService.setItem("viewedUsers", this.viewedUsersDataSource.getValue())
    }
}
