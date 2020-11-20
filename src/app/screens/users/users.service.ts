import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { User, UsersResponse } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private usersDataSource: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  private amountDataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  amountData = this.amountDataSource.asObservable();
  users = this.usersDataSource.asObservable();

  
  constructor(private http: HttpService) { }

  async getUsers(page: number, user?: string){
    const url = (user && user != "") ? `https://gorest.co.in/public-api/users?page=${page}&name=${user}` : `https://gorest.co.in/public-api/users?page=${page}`;
    const resp: UsersResponse = await this.http.request('get', url).toPromise();
    if(!resp){
      return;
    }
    this.amountDataSource.next(resp.meta.pagination.total);
    this.usersDataSource.next(resp.data)
  }
}
