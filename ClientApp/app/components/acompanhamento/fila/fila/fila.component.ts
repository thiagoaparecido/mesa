import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { FilaCreditoService } from './../../../../services/fila-credito/fila-credito.service';
import { ValidacaoService} from './../../../../services/util/validacao.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { FilaGeral } from '../../../../models/acompanhamento/fila/filageral';
import { FilaPessoal } from '../../../../models/acompanhamento/fila/filapessoal';
import { FilaComite } from '../../../../models/acompanhamento/fila/filacomite';
import { PropostaDecidida } from '../../../../models/acompanhamento/fila/proposta-decidida';

@Component({
    selector: 'fila',
    templateUrl: './fila.component.html',
    providers: [ FilaCreditoService, ValidacaoService ]
})
export class FilaComponent implements OnInit {
    
    @Input() exibeFilaComite: boolean = false;
    @Input() exibeFilaPessoal: boolean = false;    

    filaGeral: FilaGeral[] = [];
    filaPessoal: FilaPessoal[] = []; 
    filaPessoalFiltro: FilaPessoal[] = [];
    filaComite: FilaComite[] = [];  
    propostaDecidida = {} as PropostaDecidida;     
    idCliente: string = '';
    cpf: string = '';
    // proposta: string = '';
    loading: boolean = false;  
    showLegenda: boolean = false;
    
    // TODO: como fica?
    tipoLista:string = 'S';
    idCatalogo:string = 'NM';

    constructor(private filaCreditoService: FilaCreditoService, private validacaoService: ValidacaoService, private render: Renderer2) {
    }

    ngOnInit() {
        this.getFilas();
    }
    
    showLegendas(){
        if (this.showLegenda === true)
            this.showLegenda = false;
        else
            this.showLegenda = true;
    }

    pesquisarCpf(value: string): void {
        
        if(value.length > 0)
        {
            this.idCliente = value.trim().replace(".","").replace(".","").replace("-","").replace("/","");
            if(this.idCliente.length === 11)
            {
                if(this.validacaoService.validarCPF(this.idCliente))
                {
                    this.getFilaGeral();
                    this.getFilaDecidida();
                    this.filaPessoalFiltro = this.filaPessoal.filter(x => x.id_cliente == Number(this.idCliente));                    
                }
                else
                {
                    alert("CPF INVÁLIDO.");
                    this.filaPessoalFiltro = this.filaPessoal;
                }
            }
            else if(this.idCliente.length === 14)
            {
                if(this.validacaoService.validarCNPJ(this.idCliente))
                {
                    this.getFilaGeral();
                    this.filaPessoalFiltro = this.filaPessoal.filter(x => x.id_cliente == Number(this.idCliente));
                } 
                else
                {
                    alert("CNPJ INVÁLIDO.");
                    this.filaPessoalFiltro = this.filaPessoal;
                } 
            }
            else
            {
                alert("DOCUMENTO INVÁLIDO.");
                this.filaPessoalFiltro = this.filaPessoal;
            }
        }
        else
        {
            this.idCliente = "";
            this.getFilaGeral();
            this.filaPessoalFiltro = this.filaPessoal;
        }
    }

    // pesquisarNome(value: string): void {
    //     if (value != undefined && value != null && value != '' && value.length > 3){
    //         //this.getFilaGeral();
    //         this.filaPessoalFiltro = this.filaPessoal.filter(x => value.trim() == "" || x.nm_cliente_rsoc.startsWith(value.trim()));
    //     } else {
    //         this.filaPessoalFiltro = this.filaPessoal;
    //     }
    // }

    // pesquisarProposta(value: string): void {
    //     if (value != undefined && value != null && value != '' && value.length == 5){
    //         //this.getFilaGeral();
    //         this.filaPessoalFiltro = this.filaPessoal.filter(x => value.trim() == "" || x.id_proposta == value.trim());
    //     } else {
    //         this.filaPessoalFiltro = this.filaPessoal;
    //     }
    // }

    atualizarFilas(){
        var cpf = this.render.selectRootElement('#buscaCpf');
        // var proposta = this.render.selectRootElement('#buscaProposta');
        // var nome = this.render.selectRootElement('#buscaNome');
        cpf.value = ""; this.idCliente = "";
        // proposta.value = "";
        // nome.value = "";
        this.filaPessoalFiltro = this.filaPessoal;

        this.getFilas();
    }    

    private getFilas(){
        this.getFilaGeral();
        this.getFilaPessoal();
        this.getFilaComite();       
    }

    private getFilaGeral() {
        this.loading = true;        
        this.filaCreditoService.getFilaGeral(this.tipoLista, this.idCatalogo, this.idCliente).subscribe(
            data => {                
                this.loading = false,
                this.filaGeral = data                
            },
            error => {                
                this.loading = false,
                () => this.loading = false
            }
        )
    }

    private getFilaDecidida() {
        this.loading = true;
        this.filaCreditoService.getFilaDecidida(this.idCliente, "").subscribe(
            data => {
                this.propostaDecidida = data;
            },
            error => {
                this.loading = false;
                () => this.loading = false;
            }
        )
    }

    private getFilaPessoal() {
        this.filaCreditoService.getFilaPessoal(this.idCatalogo).subscribe(
            data => {this.filaPessoal = data, this.filaPessoalFiltro = data},
            error => console.log(error)
        )               
    };  
    
    private getFilaComite() {
        this.filaCreditoService.getFilaComite(this.idCatalogo).subscribe(
            data => this.filaComite = data,
            error => console.log(error)
        )                
    };    

    setBlur(field: string): void {
        var cpf = this.render.selectRootElement('#buscaCpf');
        // var proposta = this.render.selectRootElement('#buscaProposta');
        // var nome = this.render.selectRootElement('#buscaNome');

        switch (field){
            case 'cpf':
                // nome = ""; proposta = "";
                break;
            // case 'proposta':
            //     cpf = ""; nome = "";
            //     break;
            // case 'nome':
            //     cpf = ""; proposta = "";                
        }
    }
}