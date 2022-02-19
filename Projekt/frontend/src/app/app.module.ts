import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {NavComponent} from "./nav/nav.component";
import {HttpClientModule} from "@angular/common/http";
import { PlanterComponent } from './planter/planter.component';
import { InfoComponent } from './info/info.component';
import { DetailedComponent } from './detailed/detailed.component';
import { CardComponent } from './detailed/card/card.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { EditDialogComponent } from './planter/edit-dialog/edit-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AlreadyExistsDialogComponent } from './register/already-exists-dialog/already-exists-dialog.component';
import { RegistrationSucceededComponent } from './register/registration-succeeded/registration-succeeded.component';
import { PopularPlantsComponent } from './popular-plants/popular-plants.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    PlanterComponent,
    InfoComponent,
    DetailedComponent,
    CardComponent,
    EditDialogComponent,
    AlreadyExistsDialogComponent,
    RegistrationSucceededComponent,
    PopularPlantsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
