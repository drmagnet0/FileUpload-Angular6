import { Component } from "@angular/core";
import { UploadService } from "./services/upload.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isLoading: boolean = false;
  user: {} = {
    username: "test",
    email: "test@test.com",
    password: "test",
    firstName: "test",
    lastName: "test"
  };
  defaultImg: string = "/assets/default.jpg";
  defaultAvatar: string = this.defaultImg;
  avatar: File = null;

  constructor(private uploadServ: UploadService) {}

  handleFileInput(avatar: FileList) {
    this.avatar = avatar.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.defaultAvatar = event.target.result;
    };
    reader.readAsDataURL(this.avatar);
  }

  submitForm(user, img) {
    this.isLoading = true;
    this.defaultAvatar = this.defaultImg;
    // console.log(user);
    this.uploadServ.postReq(user, this.avatar).subscribe(
      res => {
        this.isLoading = false;
        console.log(res);
      },
      err => {
        this.isLoading = false;
        console.log(err.error);
        alert(err.error);
      }
    );
  }
}
