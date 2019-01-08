import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // https://blog.ionicframework.com/ionic-native-mocks/
  //No podemos crear nosotros todos los mocks. 
  //Primero debemos ver si ya existen en algun sitio
  // por ejemplo npm install @ionic-native-mocks/camera --save
  //tambien tenemos que instalar el native real
  //Los combinamos en el app.module
  image:string=null;
  constructor(private camera: Camera, private platform: Platform) {
    
   
  }

  hacerFoto(){
    this.platform.ready().then(() => {

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        console.log("la imagen esta"+ imageData);
        //y ahora a pintarla
        this.image='data:image/jpeg;base64,$(imageData)';
      }, (err) => {
        // Handle error
      });
    });
  }
}

