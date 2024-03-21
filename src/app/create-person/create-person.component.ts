import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleServiceService } from '../people-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
})
export class CreatePersonComponent implements OnInit {
  person: Person = new Person();
  submitted = false;

  constructor(
    private peopleService: PeopleServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.peopleService.createPerson(this.person).subscribe(
      (data) => {
        console.log(data);
        this.person = new Person();
        this.gotoList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newPerson(): void {
    this.submitted = false;
    this.person = new Person();
  }

  gotoList() {
    this.router.navigate(['people']);
  }
}
