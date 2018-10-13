import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  endPoint: string = "";

  constructor(
    private http: HttpClient
  ) { }

  postReq(user, avatar) {
    // console.log("user", user, "avatar", avatar);
    user.userAvatar = avatar;
    console.log(user);
  }

}
