import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostProviderService {
  APIURL:string = "https://ask-essam.000webhostapp.com/api/question_api.php";

  constructor(private http :HttpClient) { }
  postData(body: object): Observable<object> {
    return this.http.post(this.APIURL, JSON.stringify(body));
  }
}
