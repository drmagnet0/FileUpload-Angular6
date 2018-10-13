import { Component } from '@angular/core';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: {} = {
    userName: "test",
    userEmail: "test@test.com",
    userPassword: "test",
    firstName: "test",
    lastName: "test",
  }
  defaultAvatar: string = "/assets/default.jpg";
  userAvatar: File = null;

  constructor(
    private uploadServ: UploadService
  ) { }

  handleFileInput(avatar: FileList) {
    this.userAvatar = avatar.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.defaultAvatar = event.target.result;
    }
    reader.readAsDataURL(this.userAvatar);
  }

  submitForm(user, img) {
    // console.log(user);
    this.uploadServ.postReq(user, this.userAvatar);
  }

}
