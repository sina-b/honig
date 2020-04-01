import { Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormsModule } from "@angular/forms";

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal.component.html',
    styleUrls: ['./order.component.scss']
})

export class NgbdModalContent implements OnInit {
    @Input()
    name;
    email;
    message;
  
    constructor(
        public activeModal: NgbActiveModal
        ) {}
  
    ngOnInit() {
    }
    
    onSubmit(f: NgForm) {  
        console.log('you submitted value:', f);
    }

    val: string = ''; 

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
