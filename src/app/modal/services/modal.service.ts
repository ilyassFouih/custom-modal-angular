import { Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { ModalConfig } from '../models/modal-config.interface';

@Injectable({
  providedIn:"root"
})
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';
  //by default the backdrop is enabled
  private currentModalConfig:ModalConfig=this.getInitialConfig()

  init(component: any,config?:ModalConfig) {
    //append modal
    this.domService.appendComponentTo(this.modalElementId, component);
    //modal options
    this.configModal(config)
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
  }

  destroy() {
      this.domService.removeComponent();
      document.getElementById(this.modalElementId).className = 'hidden';
      document.getElementById(this.overlayElementId).className = 'hidden';
      this.currentModalConfig=this.getInitialConfig()
  }
  destroyFromOverLay() {
    if(this.currentModalConfig.backDrop){
      this.domService.removeComponent();
      document.getElementById(this.modalElementId).className = 'hidden';
      document.getElementById(this.overlayElementId).className = 'hidden';
      this.currentModalConfig=this.getInitialConfig()
    }
  }

  private configModal(config:ModalConfig){
    if(config){
      if(config.modalWidth){
        this.currentModalConfig.modalWidth=config.modalWidth
        document.getElementById(this.modalElementId).style.width=""+this.currentModalConfig.modalWidth+"%"
      }
      if(config.centre){
        this.currentModalConfig.centre=config.centre
        document.getElementById(this.modalElementId).style.alignItems="center"
      }
      if(config.opacity){
        this.currentModalConfig.opacity=config.opacity
        let opacity =config.opacity/100
        document.getElementById(this.overlayElementId).style.opacity=""+opacity
      }
      if(config.backGroundColor){
        this.currentModalConfig.backGroundColor=config.backGroundColor
        document.getElementById(this.overlayElementId).style.backgroundColor=config.backGroundColor
      }
      
    }

  }

  private getInitialConfig():ModalConfig{
    return {
      modalWidth:30,
      backDrop:true,
      opacity:20,
      backGroundColor:"#0000"
    }

  }
}