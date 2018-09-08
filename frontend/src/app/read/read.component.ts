import { MahasiswaService } from '../mahasiswa.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  mahasiswa: any;

  constructor(private http: HttpClient, private service: MahasiswaService) {}

  ngOnInit() {
    this.getallMahasiswa();
  }

  getallMahasiswa() {
    this.service.getallMahasiswa().subscribe(res => {
      this.mahasiswa = res;
    }, 
    err => {
      console.log(err);
    	alert('Error Backend Belum Aktif !');
    });
  }

  deleteMahasiswa(npm) {
  		if (confirm('Delete ?')) {
  			this.service.deleteMahasiswa(npm);
  		}
	}
}