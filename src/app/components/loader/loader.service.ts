import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoaderVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isVisible = this.isLoaderVisible.asObservable();

  constructor() { }
  setloading(status: boolean){
    this.isLoaderVisible.next(status);
  }
}
