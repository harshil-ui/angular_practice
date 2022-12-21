import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ModalComponent } from '../shared/modal/modal.component';

@NgModule({
  declarations: [
    AuthModalComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AuthModalComponent
    
  ]
})
export class UserModule { }
