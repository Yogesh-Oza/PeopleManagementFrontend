import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PeopleServiceService } from '../people-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './list-people.component.html',
})
export class PersonListComponent implements OnInit {
  persons: Observable<Person[]> | undefined;

  constructor(
    private peopleService: PeopleServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.persons = this.peopleService.getPersonsList();
  }

  deletePerson(_id: string) { 
    this.peopleService.deletePerson(_id).subscribe(
      () => {
        console.log('Person deleted successfully');
        this.reloadData();
      },
      (error) => console.log('Error deleting person:', error)
    );
  }

  personDetails(_id: string) { 
    this.router.navigate(['details', _id]);
  }

  updatePerson(_id: string) { 
    this.router.navigate(['update', _id]);
  }
}
