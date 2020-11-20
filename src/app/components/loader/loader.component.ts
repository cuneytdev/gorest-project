import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(private loaderService: LoaderService) {}
  isVisible: boolean = false;
  ngOnInit(): void {
    this.loaderService.isVisible.subscribe((resp: boolean) => {
      this.isVisible = resp;
    });
  }
}
