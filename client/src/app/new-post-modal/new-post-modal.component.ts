import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-new-post-modal',
  templateUrl: './new-post-modal.component.html',
  styleUrls: ['./new-post-modal.component.scss']
})
export class NewPostModalComponent implements OnInit {
  @Input() wish;
  @Output() onClickOutside = new EventEmitter()

  uploader: FileUploader = new FileUploader({
    url: `photo`
  });

  constructor() {
  }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      console.log(response);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      console.log(response);
    };
  }

  uploadPhoto(){
    console.log('Trying to upload...');
    this.uploader.uploadAll();
  }

  hidePostModal(){
    this.onClickOutside.emit();
  }
}
