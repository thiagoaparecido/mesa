import {Component, Input , OnInit } from '@angular/core';
import {PropostaService } from './../../../../services/proposta/proposta.service';
import {Http} from '@angular/http';
import {DomSanitizer} from '@angular/platform-browser';
import {Imagem} from './../../../../models/imagem';
import 'rxjs/Rx';


@Component({
  selector: 'visualizar-imagem',
  templateUrl: './visualizar-imagem.component.html'
})

export class VisualizarImagemComponent  {
   @Input() imageWidth: number;
   @Input() imageHeight: number;
   @Input() idProposta: string;
   isHide: boolean = true;
   loading: boolean = false;
   lstimageData: Imagem[] = [];
   selecionado: number = 0;
   strImagem: any;


  constructor(private http: Http,private operacaoService:PropostaService, private sanitizer: DomSanitizer) { }
   
    ngOnInit() { 
      this.isHide = false;
    }

    listar(){
        this.getImagemData();
    }

    private getImagemData() {
          this.loading = true;
          this.operacaoService.getDataImagem(this.idProposta,1).subscribe(
          data => this.lstimageData =  data,
          error => this.loading = false,
          () => this.loading = false
          ) 
       
        if(this.lstimageData != undefined && this.lstimageData != null)
            {
            for (var i = 0 ; i < this.lstimageData.length ; i++) {
            this.strImagem =  this.lstimageData[i].data;
            } 
        }  
          
    };

    public next()
    {
        if(this.lstimageData != undefined && this.lstimageData != null)
        {
            if(this.selecionado < this.lstimageData.length-1)
            {
                this.selecionado = this.selecionado + 1;
                var docImage = document.getElementById("image") as HTMLImageElement
                docImage.src = this.lstimageData[this.selecionado].data.toString();
            }
        }
    }

    public preview()
    {
        if(this.lstimageData != undefined && this.lstimageData != null)
        {
            if(this.selecionado >= 1)
            {
                this.selecionado = this.selecionado - 1;
                var docImage = document.getElementById("image") as HTMLImageElement
                docImage.src = this.lstimageData[this.selecionado].data.toString();
            }
       }
    }

}  
