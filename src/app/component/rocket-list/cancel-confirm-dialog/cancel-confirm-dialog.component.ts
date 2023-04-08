import { Component } from '@angular/core';
import {RocketModel} from "../../../model/RocketModel";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-cancel-confirm-dialog',
  templateUrl: './cancel-confirm-dialog.component.html',
  styleUrls: ['./cancel-confirm-dialog.component.css']
})
export class CancelConfirmDialogComponent {
  rocket: RocketModel;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.rocket = this.config.data.rocket;
  }

  accept() {
    this.ref.close(true);
  }

  decline() {
    this.ref.close(false);
  }
}
