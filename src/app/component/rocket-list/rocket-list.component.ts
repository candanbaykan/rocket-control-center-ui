import {Component, OnDestroy, OnInit} from '@angular/core';
import {RocketService} from "../../service/rocket.service";
import {RocketModel} from "../../model/RocketModel";
import {catchError, EMPTY, interval, mergeMap, retry, startWith, Subscription} from "rxjs";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {LaunchConfirmDialogComponent} from "./launch-confirm-dialog/launch-confirm-dialog.component";
import {CancelConfirmDialogComponent} from "./cancel-confirm-dialog/cancel-confirm-dialog.component";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.css'],
  providers: [DialogService]
})
export class RocketListComponent implements OnInit, OnDestroy {
  rockets: RocketModel[];
  ref: DynamicDialogRef;
  subscription: Subscription;
  isLoading = true;
  retry = 0;

  constructor(
    private rocketService: RocketService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.subscription = interval(2000).pipe(
      startWith(0),
      mergeMap(() => this.rocketService.getAll()
        .pipe(
          catchError(() => {
            ++this.retry;
            if (this.retry == 6) {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Rocket service is not responding. Please contact with system admin.'
              });
              this.retry = 0;
            }
            return EMPTY;
          }),
        ),
      )).subscribe(data => {
      this.rockets = data;
      this.isLoading = false;
      this.retry = 0;
    });
  }

  launch(rocket: RocketModel) {
    this.ref = this.dialogService.open(
      LaunchConfirmDialogComponent,
      {
        header: `Are you sure you want to launch ${rocket.id}?`,
        closable: false
      }
    );

    this.ref.onClose.subscribe(res => {
      if (res) {
        this.rocketService.launch(rocket.id)
          .pipe(retry(5))
          .subscribe();
      }
    });
  }

  cancel(rocket: RocketModel) {
    this.ref = this.dialogService.open(
      CancelConfirmDialogComponent,
      {
        header: "Confirmation",
        data: {rocket: rocket},
        closable: false
      }
    );

    this.ref.onClose.subscribe(res => {
      if (res) {
        this.rocketService.cancelLaunch(rocket.id)
          .pipe(retry(5))
          .subscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
