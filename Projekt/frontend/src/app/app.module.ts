import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from "./components/nav/nav.component";
import { HttpClientModule } from "@angular/common/http";
import { PlanterComponent } from './components/planter/planter.component';
import { CardComponent } from './components/card/card.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { EditDialogComponent } from './components/planter/edit-dialog/edit-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { AlreadyExistsDialogComponent } from './components/register/already-exists-dialog/already-exists-dialog.component';
import { RegistrationSucceededComponent } from './components/register/registration-succeeded/registration-succeeded.component';
import { PopularPlantsComponent } from './components/home/popular-plants/popular-plants.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { DeleteDialogComponent } from './components/planter/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './components/planter/add-dialog/add-dialog.component';
import { DeleteEntriesDialogComponent } from './components/planter/delete-entries-dialog/delete-entries-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    PlanterComponent,
    CardComponent,
    EditDialogComponent,
    AlreadyExistsDialogComponent,
    RegistrationSucceededComponent,
    PopularPlantsComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    DeleteEntriesDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
