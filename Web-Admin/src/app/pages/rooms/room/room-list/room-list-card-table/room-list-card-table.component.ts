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

  //Delete Button Swal
  btnDel() {
    Swal.fire({
      html: '<b>คุณต้องการลบข้อมูลห้องนี้หรือไม่</b>',
      imageUrl: '/assets/delModal.svg',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-lg btn-dark',
        cancelButton: 'btn btn-lg  btn-outline-dark',
      },
      buttonsStyling: false,
      confirmButtonText: 'ลบห้อง',
      cancelButtonText: 'ยกเลิก',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ลบห้องสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
