import { Component } from '@angular/core';
import { ModalService } from './modal/services/modal.service';
import { ModalContentComponent } from './examples/modal-content/modal-content.component';
import { ModalConfig } from './modal/models/modal-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalService:ModalService){

  }


  showModal(){
    let config:ModalConfig={modalWidth:50,backDrop:false,opacity:40}
    this.modalService.init(ModalContentComponent,config)
  }

}
