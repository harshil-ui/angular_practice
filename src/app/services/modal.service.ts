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

  private modals: Imodal[] = [];

  constructor() {
  }

  register(id: string) {
    this.modals.push({
      id: id,
      visible: false
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter(elment => elment.id !== id);
  }

  isModalOpen(id: string): boolean {
    // return !!this.modal.find(element => element.id === id)?.visible;
    return Boolean(this.modals.find(element => element.id === id)?.visible);
  }

  toggleModal(id: string) {
    // return this.visiblity = !this.visiblity;
    const modal = this.modals.find(element => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
