import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { ModalContentComponent } from './examples/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalContentComponent
  ]
})
export class AppModule { }
