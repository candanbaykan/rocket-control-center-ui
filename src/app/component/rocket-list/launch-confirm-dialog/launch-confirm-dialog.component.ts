import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {WeatherService} from "../../../service/weather.service";
import {WeatherModel} from "../../../model/WeatherModel";
import {catchError, EMPTY, interval, mergeMap, startWith, Subscription} from "rxjs";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-launch-confirm-dialog',
  templateUrl: './launch-confirm-dialog.component.html',
  styleUrls: ['./launch-confirm-dialog.component.css']
})
export class LaunchConfirmDialogComponent implements OnInit, OnDestroy {
  weather?: WeatherModel;
  subscription: Subscription;
  isLoading = true;
  retry = 0;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private weatherService: WeatherService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.subscription = interval(2000).pipe(
      startWith(0),
      mergeMap(() => this.weatherService.getWeather()
        .pipe(
          catchError(() => {
            ++this.retry;
            if (this.retry == 6) {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Weather service is not responding. Please contact with system admin.'
              });
              this.retry = 0;
            }
            return EMPTY;
          }),
        ),
      )).subscribe(data => {
      this.weather = data;
      this.isLoading = false;
      this.retry = 0;
    })
  }

  accept() {
    this.ref.close(true);
  }

  decline() {
    this.ref.close(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected readonly Math = Math;
}
