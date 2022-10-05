import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
      this.photo = `http://192.168.43.24/apiNew/bukti/${val.foto}`;
      this.qr = `http://192.168.43.24/apiNew/qrcode/${val.qrcode}`;
    });  
  }
  Logout(){
    this.storage.clear();
    localStorage.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
