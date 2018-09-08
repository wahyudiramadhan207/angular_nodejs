import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable()
export class MahasiswaService {

  parentUri = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getallMahasiswa() {
    const uri = this.parentUri + 'mahasiswa';
    return this
            .http
            .get(uri)
            .pipe(map(res => 
                        {
                          return res;
                        }));
  }

  getMahasiswa(npm) {
    const uri = this.parentUri + 'mahasiswa/' + npm;
    return this
            .http
            .get(uri)
            .pipe(map(res => 
                        {
                          return res;
                        }));
  }

  deleteMahasiswa(npm) 
  {
    const uri = this.parentUri + 'mahasiswa/' + npm;
    return this
            .http
            .delete(uri)
            .subscribe
            (res => {
                        location.href = "/read";
                    }, 
             err => {
                        location.href = "/read";
                    }
            );
  }

  createMahasiswa(npm, nama) 
  {
    const uri = this.parentUri + 'mahasiswa';
    const obj = 
    {
      npm: npm,
      nama: nama
    };
    this.http.post(uri, obj)
        .subscribe
        (res => {
                    location.href = "/read";
                }, 

         err => {
                    location.href = "/read";
                }
        );
  }

  updateMahasiswa(npm, nama, wherenpm) 
  {
    const uri = this.parentUri + 'mahasiswa/' + wherenpm;
    const obj = 
    {
      npm: npm,
      nama: nama
    };
    return this
            .http
            .put(uri, obj)
            .subscribe
            (res => {
                        location.href = "/read";
                    }, 
             err => {
                        location.href = "/read";
                    }
            );
  }

}