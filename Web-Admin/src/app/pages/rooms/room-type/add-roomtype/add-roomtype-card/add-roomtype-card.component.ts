import { Component, OnInit } from '@angular/core';
import { RoomType } from '../../../../../interfaces/room-type';

@Component({
  selector: 'app-add-roomtype-card',
  templateUrl: './add-roomtype-card.component.html',
  styleUrls: ['./add-roomtype-card.component.scss'],
})
export class AddRoomtypeCardComponent implements OnInit {
  roomType!: RoomType;

  constructor() {}

  ngOnInit(): void {
    this.roomType = RoomType.initialize();
  }

  save(): void {
    console.log('Saving');
    console.log(this.roomType);
  }
}
