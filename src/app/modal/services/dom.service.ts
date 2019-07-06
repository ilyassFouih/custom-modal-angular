import {
  Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef,} from '@angular/core';
import { ModalConfig } from '../models/modal-config.interface';

@Injectable({ providedIn: "root" })
export class DomService {

  private childComponentRef: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public appendComponentTo(parentId: string, child: any) {
    // Create a component reference from the component 
    this.childComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(child)
      .create(this.injector);


    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.childComponentRef.hostView);

    // Get HTML element from component 
    const childDomElem = (this.childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.getElementById(parentId).appendChild(childDomElem);

  }

  public removeComponent() {
    this.appRef.detachView(this.childComponentRef.hostView);
    this.childComponentRef.destroy();
  }


  
}
