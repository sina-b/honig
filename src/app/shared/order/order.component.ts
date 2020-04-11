import { Component, OnInit } from '@angular/core';
import {  NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal.component.html',
    styleUrls: ['./order.component.scss']
})

export class NgbdModalContent implements OnInit {

    constructor(
        public activeModal: NgbActiveModal,
        public firestore: AngularFirestore
        ) {
        }
    
    ngOnInit(): void {
        document.querySelector('.btn-content').innerHTML = 'Senden';
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
                    document.querySelector('.btn-content').innerHTML = 'Danke!';
                    btn_submit.classList.add('btn-success');
                    btn_submit.classList.remove('btn-danger');

                    input_message.classList.remove('has-danger');
                    input_name.classList.remove('has-danger');
                    input_email.classList.remove('has-danger');
                    f.form.disable()

                    this.firestore.collection("mail").add({
                        to: ["brandstetter.sina@gmail.com"],
                        message: {
                            subject: "Neue Bestellung",
                            html: `Neue Nachricht von ${input.name}, ${input.email}: ${input.message}`
                        }
                    })
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
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
