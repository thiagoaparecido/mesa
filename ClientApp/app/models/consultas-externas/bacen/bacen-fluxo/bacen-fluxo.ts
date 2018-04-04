import { BacenFluxoConsolidado } from "./bacen-fluxo-consolidado";
import { BacenFluxoParcela } from "./bacen-fluxo-parcela";
import { BacenFluxoOperacao } from "./bacen-fluxo-operacao";

export class BacenFluxo {
    bacenFluxoConsolidado: BacenFluxoConsolidado;
    bacenFluxoParcela: BacenFluxoParcela[];
    bacenFluxoOperacao: BacenFluxoOperacao;
}