import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'http://localhost:8080/hys/';

  constructor(private httpClient: HttpClient) { }
}
