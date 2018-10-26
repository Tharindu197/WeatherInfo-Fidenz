import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  constructor(private http: HttpClient) { }

public getJSON(): Observable<any> { //read json file
    return this.http.get("./assets/city_codes.json");
}

}
