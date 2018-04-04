import { Component, Input, OnInit } from '@angular/core';
import { ConsultasInternas } from './../../../../models/consultas-internas';
import { ConsultasInternasService } from './../../../../services/proposta/consultas-internas.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'consultas-internas',
    templateUrl: './consultas-internas.component.html',
    styleUrls: [],
    providers: [ ConsultasInternasService ]
})

export class ConsultasInternasComponent implements OnInit{
    @Input() idProposta:string;
    consultasInternas: ConsultasInternas[];
    mensagem: string;
    loading: boolean = false;

    constructor(private http: Http, private consultasInternasService: ConsultasInternasService) {}
    
    ngOnInit(): void {
        this.getConsultasInternas();
    }
    
    private getConsultasInternas(){
        this.loading = true;
        this.consultasInternasService.getConsultasInternas(this.idProposta).subscribe(
            data => this.consultasInternas = data,
            error => this.loading = false,
            () => {
                this.loading = false;
                console.log(this.consultasInternas);
            }
        )
    }
}