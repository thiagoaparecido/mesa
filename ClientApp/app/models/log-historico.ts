import { AlertaAviso } from "./alertas-externos/alerta-aviso";

export class LogHistorico {
    campo: string;
    anterior: string;
    novo: string;
    dtAlteracao: Date;
    usuario: string;
    edicaoAtual: boolean;
    parecerComercial: string;
    parecerInterno: string;
    dtInclusao?: Date;
    dtAgendamento?: Date;
    motivos: string[];
    avisos: AlertaAviso[];
    compromisso: string;
    alerta: string;
    tempoAdicionado: number;
    parecerDescricao: string;
}