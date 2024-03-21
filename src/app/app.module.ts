import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './details-person/delete-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { PersonListComponent } from './list-people/list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    PersonDetailsComponent,
    UpdatePersonComponent,
    PersonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
