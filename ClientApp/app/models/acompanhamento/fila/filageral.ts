import { FilaTotais } from './filatotais';

export class FilaGeral {
    leitura: boolean;
    captura: boolean;
    bloquearAcoesNaDecisaoFixa: boolean;
    totalFila: number;
    totalAnalise: number;
    totalUsuariosFila: number;
    totalUsuariosAnalise: number;
    filaTotais: FilaTotais[];
}