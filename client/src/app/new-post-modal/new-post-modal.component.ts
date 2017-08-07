import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { environment } from '../../environments/environment';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-new-post-modal',
  templateUrl: './new-post-modal.component.html',
  styleUrls: ['./new-post-modal.component.scss']
})
export class NewPostModalComponent implements OnInit {
  @Input() wish;
  @Output() onClickOutside = new EventEmitter()
  @Output() onSavePost = new EventEmitter()

  uploader: FileUploader = new FileUploader({
    url: `${environment.apiEndpoint}/photo`
  });

  content : string = '';
  fileName:string;
  fileURI: string;

  constructor(private request: RequestService) {
    console.log();
  }


  ngOnInit() {
    this.resetPhoto();

    this.uploader.onSuccessItem = (item, response) => {
      this.fileName = JSON.parse(response)['filename'];
      this.fileURI = `${environment.apiEndpoint}/images/stage/${this.fileName}`;
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
    this.fileURI = `${environment.apiEndpoint}/images/default`
  }

  uploadPhoto(){
    console.log('Trying to upload...');
    this.uploader.uploadAll();
  }

  createPost(){
    if(this.fileName && this.content.length !== 0 && this.wish){

      const params = {
        wishId: this.wish['_id'],
        comment: this.content,
        photoURI: this.fileName
      }

      console.log('create post with params', params)

      this.request.post('/post/create', params)
        .subscribe(res=>{
          let path = `/photo/save`;
          this.request.post(path,{id: this.fileName})
            .subscribe(saveRes=>{});
          console.log('saved the earth', res);
          this.onSavePost.emit(res);
        },
        err=> console.log(err))
    }else{
      console.log('Fulfill every field')
    }
  }

  hidePostModal(){
    this.resetPhoto();
    this.onClickOutside.emit();
  }
}
