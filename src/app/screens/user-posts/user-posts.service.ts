import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { UserPostsResponse } from 'src/app/models/userposts.model';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  constructor(private http: HttpService) { }

  async getUserPosts(id: number): Promise<UserPostsResponse>{
      const url = `https://gorest.co.in/public-api/users/${id}/posts`;
      const resp: UserPostsResponse = await this.http.request('get', url).toPromise();
      if(!resp){
        return;
      }
      return Promise.resolve(resp);
  }
}
