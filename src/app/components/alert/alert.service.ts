import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert } from 'src/app/models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertsDataSource: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([])
  alerts = this.alertsDataSource.asObservable();

  constructor() { }

  showAlert(alert: Alert){
    this.alertsDataSource.next([alert]);
  }
}
