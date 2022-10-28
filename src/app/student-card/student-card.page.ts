import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.page.html',
  styleUrls: ['./student-card.page.scss'],
})
export class StudentCardPage{

  public name: string;
  public photo: string;
  public qr: string;

  constructor(
    private storage : Storage,
    private navCtrl : NavController
  ) {}
  ngOnInit(): void{
    this.storage.get('isLoggedIn').then((val) => {
      console.log(val);
      this.name = val.nama;
      this.photo = `http://192.168.43.24:/apiNew/bukti/${val.foto}`;
      this.qr = `http://192.168.43.24:/apiNew/qrcode/${val.qrcode}`;
    });  
  }
  Logout(){
    this.storage.clear();
    localStorage.clear();
    this.navCtrl.navigateRoot('/login');
  }
}