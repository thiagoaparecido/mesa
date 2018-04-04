import { BacenOutroCredito } from "./bacen-outro-credito";
import { BacenFinanciamento } from "./bacen-financiamento";
import { BacenEmprestimos } from "./bacen-emprestimos";
import { BacenModalidadeDataBase } from "./bacen-modalidade-data-base";
import { BacenModalidadeTotal } from "./bacen-modalidade-total";

export class BacenModalidade {
    modalidadeDataBases: BacenModalidadeDataBase[];
    emprestimos: BacenEmprestimos[];
    emprestimoTotal: BacenModalidadeTotal[];
    financiamentos: BacenFinanciamento[];
    financiamentoTotal: BacenModalidadeTotal[];
    outrosCreditos: BacenOutroCredito[];
    outrosCreditosTotal: BacenModalidadeTotal[];
}