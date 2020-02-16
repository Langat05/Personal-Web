import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private FOLLOW_ME = "https://www.youtube.com/channel/UCGehE3r1Udmr2rulMhdhLYQ?view_as=subscriber";

  constructor(private httpClient: HttpClient) { }

  public fetch(){
    return this.httpClient.get(this.FOLLOW_ME);
  }
}