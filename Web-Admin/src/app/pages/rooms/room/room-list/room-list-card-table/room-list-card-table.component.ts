import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room-list-card-table',
  templateUrl: './room-list-card-table.component.html',
  styleUrls: ['./room-list-card-table.component.scss'],
})
export class RoomListCardTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //delete btn
  btnDel() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-dark btn-lg',
        cancelButton: 'btn btn-outline-dark btn-lg',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        html: '<b>คุณต้องการลบข้อมูลห้องนี้หรือไม่</b>',
        imageUrl: '/assets/delModal.svg',
        showCancelButton: true,
        confirmButtonText: 'ลบห้อง',
        cancelButtonText: 'ยกเลิก',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('ลบห้องสำเร็จ!', '', 'success');
        }
      });
  }
}
