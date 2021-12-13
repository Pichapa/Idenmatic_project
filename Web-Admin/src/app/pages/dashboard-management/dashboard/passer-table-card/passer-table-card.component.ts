import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passer-table-card',
  templateUrl: './passer-table-card.component.html',
  styleUrls: ['./passer-table-card.component.scss'],
})
export class PasserTableCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //Block Button Swal
  btnBlock() {
    Swal.fire({
      html: '<h5><b>คุณต้องการบล็อกผู้ใช้งานรายนี้หรือไม่</b></h5>',
      imageUrl: '/assets/Icon-block.svg',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-lg btn-dark',
        cancelButton: 'btn btn-lg  btn-outline-dark',
      },
      buttonsStyling: false,
      confirmButtonText: 'บล็อกผู้ใช้งาน',
      cancelButtonText: 'ยกเลิก',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'บล็อกผู้ใช้งานสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  //UnBlock Button Swal
  btnUnBlock() {
    Swal.fire({
      html: '<h5><b>คุณต้องการปลดบล็อกผู้ใช้งานรายนี้หรือไม่</b></h5>',
      imageUrl: '/assets/Icon-block.svg',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-lg btn-dark',
        cancelButton: 'btn btn-lg  btn-outline-dark',
      },
      buttonsStyling: false,
      confirmButtonText: 'ปลดบล็อก',
      cancelButtonText: 'ยกเลิก',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ปลดบล็อกผู้ใช้งานสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
