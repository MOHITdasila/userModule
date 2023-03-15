import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  value = 'Clear me';
  usersList = [{
    userName: 'Lelah Nicholes',
    location: 'Troy',
    city: 'MI',
    interest: ['clothes', 'stem'],
    id: 1,
    asset: 'pic2.jpg'
  },
  {
    userName: 'Jesus Weiss',
    location: 'Troy',
    city: 'MI',
    interest: ['clothes', 'stem', 'Speed', "winter"],
    id: 2,
    asset: 'pic1.jpg'
  },
  {
    userName: 'Annie Ricxe',
    location: 'Troy',
    city: 'MI',
    interest: ['Road', 'Mountain', 'trip', 'earth', 'nature'],
    id: 3,
    asset: 'pic5.jpg'
  },
  {
    userName: 'Robert Browerr',
    location: 'Troy',
    city: 'MI',
    interest: ['Maintainance', 'repair', 'gears'],
    id: 4,
    asset: 'pic3.jpg'
  },
  {
    userName: 'Amy Campbell',
    location: 'Troy',
    city: 'MI',
    interest: ['music', 'disks'],
    id: 5,
    asset: 'pic6.jpg'
  },
  {
    userName: 'Antony Nicholes',
    location: 'Troy',
    city: 'MI',
    interest: ['vintage', 'electric'],
    id: 6,
    asset: 'pic4.jpg'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
