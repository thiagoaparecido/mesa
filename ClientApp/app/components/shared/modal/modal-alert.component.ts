import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'modal-alert',
    templateUrl: './modal-alert.component.html'
})

export class ModalAlertComponent {

    @Input() titulo: string;
    @Input() mensagem: string;
    @Output() fecharModal = new EventEmitter<boolean>();

    closeModal() {
        this.fecharModal.emit(false);
    }
}