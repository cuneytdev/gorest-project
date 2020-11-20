import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ViewedUsersService } from 'src/app/components/latest-viewed-users/viewed-users.service';
import { StorageService } from 'src/app/core/storage.service';
import { User } from 'src/app/models/user.interface';
import { UserPost } from 'src/app/models/userposts.model';
import { UserPostsService } from './user-posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit, OnDestroy {
  userPosts: UserPost[] = [];
  user: User;
  subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private userPostService: UserPostsService,
    private storageService: StorageService,
    private viewUserService: ViewedUsersService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.subscription =  this.viewUserService.onViewPostClick.subscribe((user: User) => {
      this.router.navigate([`posts/${user.id}`])
      this.viewUserService.add(user);
      this.getPosts(user.id);
      this.storageService.setItem("userInfo", user);
      this.getUser();
    });
    const userId = +this.route.snapshot.paramMap.get('id');
    this.getPosts(userId);
    this.getUser();
  }

  async getPosts(userId: number) {
    const userPostsRsponse = await this.userPostService.getUserPosts(userId);
    this.userPosts = userPostsRsponse.data;
  }

  async getUser() {
    this.user = await this.storageService.getItem('userInfo');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
