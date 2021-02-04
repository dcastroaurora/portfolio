import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '@widgets/modal/modal.component';
import { IModal } from '@widgets/modal/modal.interface';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent {
  @Input() info: IModal = { title: '', image: '', description: '' };

  constructor(private modalService: NgbModal) {}

  open(info: IModal) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.info = info;
  }
}
