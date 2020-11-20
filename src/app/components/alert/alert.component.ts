import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/models/alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alerts: any[] = []
  constructor(private alertService: AlertService) {}

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }

  ngOnInit(): void {
    this.alertService.alerts.subscribe((resp: Alert[]) => {
      this.alerts = resp;
    });
  }
}
