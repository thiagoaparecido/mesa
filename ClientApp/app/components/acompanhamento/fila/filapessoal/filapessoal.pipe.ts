import { Pipe, PipeTransform } from '@angular/core';
import { FilaPessoal } from '../../../../models/acompanhamento/fila/filapessoal';
import { FilaFiltro } from '../../../../models/acompanhamento/fila/fila-filtro';

@Pipe({
    name: 'fila-pessoal-filter',
    pure: false
})
export class FilaPessoalPipe implements PipeTransform {
    transform(items: FilaPessoal[], filter: FilaFiltro): any {
        if (items == undefined || filter == undefined || items.length == 0){
            return items;
        }
        if (!items || !filter) {
            return items;
        }

        return items.filter(x => (filter.cpf.trim() == "" || (filter.cpf.trim() != "" && x.id_cliente == Number(filter.cpf)))
                            && (filter.nome.trim() == "" || (filter.nome.trim() != "" && x.nm_cliente_rsoc.trim() == filter.nome.trim()))
                            && (filter.proposta.trim() == "" || (filter.proposta.trim() != "" && x.id_proposta.trim() == filter.proposta.trim()))
                         );
    }
}