import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approval-table-card',
  templateUrl: './approval-table-card.component.html',
  styleUrls: ['./approval-table-card.component.scss'],
})
export class ApprovalTableCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //Confirm Button Swal
  btnConfirm() {
    Swal.fire({
      html: '<h5><b>คุณยืนยันที่จะอนุมัติเพิ่มคนหรือไม่</b></h5>',
      imageUrl: '/assets/confirm-alert.svg',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-lg btn-dark',
        cancelButton: 'btn btn-lg  btn-outline-dark',
      },
      buttonsStyling: false,
      confirmButtonText: 'อนุมัติ',
      cancelButtonText: 'ยกเลิก',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'อนุมัติเพิ่มคนสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  //Cancel Button Swal
  btnCancel() {
    Swal.fire({
      html: '<h5><b>คุณยืนยันที่จะยกเลิกคำขออนุมัตินี้หรือไม่</b></h5>',
      imageUrl: '/assets/confirm-alert.svg',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-lg btn-dark',
        cancelButton: 'btn btn-lg  btn-outline-dark',
      },
      buttonsStyling: false,
      confirmButtonText: 'ยกเลิกคำขอ',
      cancelButtonText: 'ยกเลิก',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ยกเลิกคำขอสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
