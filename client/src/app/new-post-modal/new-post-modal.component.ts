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
  @Output() onClickOutside = new EventEmitter();
  @Output() onSavePost = new EventEmitter();

  content : string = '';
  fileName:string;

  constructor(private request: RequestService) {
    console.log();
  }

  ngOnInit() { }

  photoChange(fileName){
    this.fileName = fileName;
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
            .subscribe(saveRes=>{
              console.log('saved the earth', res);
              this.onSavePost.emit(res);
            });
        },
        err=> console.log(err))
    }else{
      console.log('Fulfill every field')
    }
  }

  hidePostModal(){
    this.onClickOutside.emit();
  }
}
