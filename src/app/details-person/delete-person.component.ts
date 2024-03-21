import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PeopleServiceService } from '../people-service.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './delete-person.component.html',
})
export class PersonDetailsComponent implements OnInit {
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

  list() {
    this.router.navigate(['people']);
  }
}
