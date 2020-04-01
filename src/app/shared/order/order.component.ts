import { Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms";
import 'smtp.js'; //file path may change → 
declare let Email: any;

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal.component.html',
    styleUrls: ['./order.component.scss']
})

export class NgbdModalContent {
    @Input()
    name;
  
    constructor(
        public activeModal: NgbActiveModal
        ) {}
    
    onSubmit(f: NgForm) {
        const input = f.value
        console.log(input.name);
        console.log(input.email);
        console.log(input.message);
    }
  }



@Component({
    selector: 'app-order-component',
    templateUrl: './order.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
