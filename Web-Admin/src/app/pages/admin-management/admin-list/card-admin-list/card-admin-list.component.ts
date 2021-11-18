import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-admin-list',
  templateUrl: './card-admin-list.component.html',
  styleUrls: ['./card-admin-list.component.scss'],
})
export class CardAdminListComponent implements OnInit {
  ListAdmin = [
    {
      id: 123456,
      name: 'ชาญชัย',
      lastname: 'สุขดี',
      email: 'chanchi.sook@email.com',
      adminType: 'ผู้ดูแลระดับ 1',
    },
    {
      id: 123457,
      name: 'บุญมี',
      lastname: 'กรรมบัง',
      email: 'boonmee22@email.com',
      adminType: 'ผู้ดูแลระดับ 2',
    },
    {
      id: 123457,
      name: 'บุญมี',
      lastname: 'กรรมบัง',
      email: 'boonmee22@email.com',
      adminType: 'ผู้ดูแลระดับ 2',
    },
    {
      id: 123457,
      name: 'บุญมี',
      lastname: 'กรรมบัง',
      email: 'boonmee22@email.com',
      adminType: 'ผู้ดูแลระดับ 2',
    },
    {
      id: 123457,
      name: 'บุญมี',
      lastname: 'กรรมบัง',
      email: 'boonmee22@email.com',
      adminType: 'ผู้ดูแลระดับ 2',
    },
    {
      id: 123457,
      name: 'บุญมี',
      lastname: 'กรรมบัง',
      email: 'boonmee22@email.com',
      adminType: 'ผู้ดูแลระดับ 2',
    },
    {
      id: 123457,
      name: 'บุญมี',
      lastname: 'กรรมบัง',
      email: 'boonmee22@email.com',
      adminType: 'ผู้ดูแลระดับ 2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
