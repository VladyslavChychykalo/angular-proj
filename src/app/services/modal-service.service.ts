import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  isModalOpen = false;

  onOpenModal() {
    this.isModalOpen = true;
  }

  onCloseModal() {
    this.isModalOpen = false;
  }
}
