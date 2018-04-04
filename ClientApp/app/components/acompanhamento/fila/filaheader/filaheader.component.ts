import { Component, OnInit } from '@angular/core';
import { MesaUsuarioService } from './../../../../services/fila-credito/mesa-usuario.service';
import { MesaUsuario } from './../../../../models/mesa-usuario';

@Component({
    selector: 'fila-header',
    templateUrl: './filaheader.component.html',
    providers: [ MesaUsuarioService ]
})
export class FilaHeaderComponent implements OnInit {

    usuario: MesaUsuario;
    dateTime: Date = new Date();

    constructor(private mesaUsuarioService: MesaUsuarioService) { }

    getUsuario(){
        this.mesaUsuarioService.getUsuario().subscribe(
            data => this.usuario = data,
            error => console.log(error)
        )
    }

    ngOnInit(): void {
        this.getUsuario();
        setInterval(() => {
            this.dateTime = new Date();
        }, 1);
    }
}