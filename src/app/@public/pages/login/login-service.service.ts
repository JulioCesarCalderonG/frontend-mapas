import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = `http://localhost:5200`;
  constructor(private http: HttpClient) { }



  postLogin(formData: FormData):Observable<any>{
    return this.http.post(`${this.url}/api/auth`,{usuario:'jccalderong', password:'123456'});
  }
}
