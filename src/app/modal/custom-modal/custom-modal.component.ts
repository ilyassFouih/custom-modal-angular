import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit() {
    
  }

  removeModal(){
    this.modalService.destroyFromOverLay()
  }
}
