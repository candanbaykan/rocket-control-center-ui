import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import { NavbarComponent } from './component/navbar/navbar.component';
import { RocketListComponent } from './component/rocket-list/rocket-list.component';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import { LaunchConfirmDialogComponent } from './component/rocket-list/launch-confirm-dialog/launch-confirm-dialog.component';
import { CancelConfirmDialogComponent } from './component/rocket-list/cancel-confirm-dialog/cancel-confirm-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import {SkeletonModule} from "primeng/skeleton";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RocketListComponent,
    LaunchConfirmDialogComponent,
    CancelConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
    CardModule,
    AppRoutingModule,
    SkeletonModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
