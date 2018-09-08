import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MahasiswaService } from '../mahasiswa.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private service: MahasiswaService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      npm: ['', Validators.required ],
      nama: ['', Validators.required ] 
   });
  }

  updateMahasiswa(npm, nama) {
    this.route.params.subscribe(params => {
    this.service.updateMahasiswa(npm, nama, params['id']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getMahasiswa(params['id']).subscribe((res: any) => {
        this.angForm.get('npm').setValue(res.npm);
        this.angForm.get('nama').setValue(res.nama);
      }, 
      err => {
              console.log(err);
              location.href = "/read";
            });
    });
  }
}