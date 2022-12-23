import { Injectable } from '@angular/core';

interface Imodal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  visiblity = false;

  private modal: Imodal[] = [];

  constructor() {
  }

  register(id: string) {
    this.modal.push({
      id: id,
      visible: false
    });
  }

  isModalOpen() {
    return this.visiblity;
  }

  toggleModal() {
    return this.visiblity = !this.visiblity;
  }
}
