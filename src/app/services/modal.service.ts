import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
    visiblity = false;

  constructor() {
   }

   isModalOpen(){
    return this.visiblity;
   }

   toggleModal(){
    return this.visiblity = !this.visiblity;
   }
}
