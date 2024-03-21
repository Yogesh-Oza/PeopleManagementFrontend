import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleServiceService } from '../people-service.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
})
export class UpdatePersonComponent implements OnInit {
  _id!: string;
  person!: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleServiceService
  ) {}

  ngOnInit() {
    this.person = new Person();

    this._id = this.route.snapshot.params['id'];

    this.peopleService.getPerson(this._id).subscribe(
      (data: Person) => {
        console.log(data);
        this.person = data;
      },
      (error) => console.log(error)
    );
  }

  updatePerson() {
    this.peopleService.updatePerson(this._id, this.person).subscribe(
      (data) => {
        console.log(data);
        this.person = new Person();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updatePerson();
  }

  gotoList() {
    this.router.navigate(['persons']);
  }
}
