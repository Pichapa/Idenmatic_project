import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-notification-list',
  templateUrl: './card-notification-list.component.html',
  styleUrls: ['./card-notification-list.component.scss'],
})
export class CardNotificationListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //Notification list table
  headTable = [
    'วันที่แจ้งเตือน',
    'เวลาแจ้งเตือน',
    'หัวข้อแจ้งเตือน',
    'รายละเอียด',
    'ID ผู้ใช้',
    'ชื่อ',
    'นามสกุล',
    '',
  ];
  itemsTable: any = [
    {
      notiDate: '10 มี.ค. 64',
      notiTime: '12.45 น.',
      heading: 'รถผ่านประตูไม่ได้',
      detail: 'ไม้กั้นประตูทางเข้าโซน1 ขัดข้อง',
      idUser: '123456',
      userName: 'ชาญชัย',
      userLast: 'สุขดี',
    },
    {
      notiDate: '10 มี.ค. 64',
      notiTime: '12.45 น.',
      heading: 'ประตูทางเข้าขัดข้อง',
      detail: 'ประตูทางเข้า1 ขัดข้อง สแกนแล้วประตูไม่เปิด',
      idUser: '123456',
      userName: 'ชาญชัย',
      userLast: 'สุขดี',
    },
    {
      notiDate: '10 มี.ค. 64',
      notiTime: '12.45 น.',
      heading: 'แจ้งปัญหา/ข้อเสนอแนะ',
      detail: 'แอปมีปัญหา กดเข้าจองกิจกรรมในพื้นที่ส่วนกลางไม่ได้',
      idUser: '123456',
      userName: 'ชาญชัย',
      userLast: 'สุขดี',
    },
  ];

  //Show Information Swal
  btnShow() {
    Swal.fire({
      html:
        '<h4 class="fw-bold mt-3" style="color: #890203;">ข้อมูลการแจ้งเตือน</h4>' +
        '<div class="fs-6 fw-bold">' +
        '10 มีนาคม 2564 , 12.45 น.' +
        '<hr class="border border-secondary">' +
        '</div>' +
        //แสดงรายละเอียด
        '<h5 class="fs-5 fw-bold mt-3 text-start" style="color: #890203;">รายละเอียด</h5>' +
        '<div class="card border border-secondary" style="min-height:150px;box-shadow:none;border-radius:8px;">' +
        '<p class="mt-2">' +
        'แอปมีปัญหา กดเข้าจองกิจกรรมในพื้นที่ส่วนกลางไม่ได้' +
        '</p>' +
        '</div>' +
        //แสดงข้อมูลผู้ใช้งาน
        '<h5 class="fs-5 fw-bold mt-3 text-start" style="color: #890203;">ข้อมูลผู้ใช้งาน</h5>' +
        '<div class="card border border-secondary" style="min-height:200px;box-shadow:none;border-radius:8px;">' +
        '<div class="col-12">' +
        '<div class="row g-1 mt-2">' +
        '<div class="col-3"><img src="/assets/scan-img.jpg" class="rounded-circle" alt="image-user" width="78" height="78"></div>' +
        '<div class="col text-start">' +
        '<div class="fw-bold" style="color: #890203;">ID ผู้ใช้งาน</div>' +
        '<div class="fw-bold" style="color: #890203;">ชื่อ</div>' +
        '<div class="fw-bold" style="color: #890203;">นามสกุล</div>' +
        '<div class="fw-bold" style="color: #890203;">ประเภทบุคคล</div>' +
        '<div class="fw-bold" style="color: #890203;">เบอร์โทร</div>' +
        '<div class="fw-bold" style="color: #890203;">อีเมล</div>' +
        '</div>' +
        '<div class="col text-start">' +
        '<div class="fw-normal">123456</div>' +
        '<div class="fw-normal">ชาญชัย</div>' +
        '<div class="fw-normal">สุขดี</div>' +
        '<div class="fw-normal">เจ้าของห้อง</div>' +
        '<div class="fw-normal">0987654321</div>' +
        '<div class="fw-normal">chanchai.sook@gmail.com</div>' +
        '</div>' +
        ' </div>' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
}
