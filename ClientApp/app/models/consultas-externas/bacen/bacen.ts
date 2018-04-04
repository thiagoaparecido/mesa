import { BacenFluxo } from "./bacen-fluxo/bacen-fluxo";
import { BacenHistorico } from "./bacen-historico/bacen-historico";
import { BacenModalidade } from "./bacen-modalidade/bacen-modalidade";

export class Bacen {
    bacenFluxo: BacenFluxo;
    bacenHistorico: BacenHistorico[];
    bacenModalidade: BacenModalidade;
}