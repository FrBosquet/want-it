import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { environment } from '../../environments/environment';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent implements OnInit {
  @Output() onPhotoChange = new EventEmitter();
  fileName:string;
  fileURI: string;

  uploader: FileUploader = new FileUploader({
    url: `${environment.apiEndpoint}/photo`
  });

  constructor(private request: RequestService) { }

  ngOnInit() {
    this.resetPhoto();

    this.uploader.onSuccessItem = (item, response) => {
      this.fileName = JSON.parse(response)['filename'];
      this.fileURI = `${environment.apiEndpoint}/images/stage/${this.fileName}`;
      this.emitChange();
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      console.log(response);
    };
  }

  resetPhoto(){
    if(this.fileName){
      let path = `/photo/delete`;
      this.request.post(path,{id: this.fileName})
        .subscribe(res=>{
          console.log(res);
        })
    }
    this.fileName = undefined;
    this.fileURI = `${environment.apiEndpoint}/images/default`;
    this.emitChange();
  }

  emitChange(){
    this.onPhotoChange.emit(this.fileName);
  }

  uploadPhoto(){
    console.log('Trying to upload...');
    this.uploader.uploadAll();
  }

}
