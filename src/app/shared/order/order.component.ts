import { Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal.component.html',
    styleUrls: ['./order.component.scss']
})

export class NgbdModalContent implements OnInit {
    @Input()
    name;
  
    constructor(
        public activeModal: NgbActiveModal,
        ) {}
    
    ngOnInit(): void {
        document.querySelector(".btn-content").innerHTML = 'Senden';
    }

    onSubmit(f: NgForm) {
        let regexp = new RegExp('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+')
        let input_name = document.getElementById('input_name')
        let input_email = document.getElementById('input_email')
        let input_message = document.getElementById('input_message')
        let btn_submit = document.getElementById('btn_submit')

        const input = f.value

        if (input.name != undefined) {
            if (regexp.test(input.email) == true) {
                if (input.message != undefined) {
                    console.log('thank you for your message')
                    document.querySelector(".btn-content").innerHTML = 'Danke!';
                    btn_submit.classList.add('btn-success');
                    btn_submit.classList.remove('btn-danger');

                    input_message.classList.remove('has-danger');
                    input_name.classList.remove('has-danger');
                    input_email.classList.remove('has-danger');
                    f.form.disable()
                }
                else {
                    input_message.classList.add('has-danger');
                    console.log('no message')
                }
            }
            else {
                input_email.classList.add('has-danger');
                console.log('email invalid')
            }
        }
        else {
            input_name.classList.add('has-danger');
            console.log('name required')
        }
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
