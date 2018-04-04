import { Parecer } from "./parecer";

export class ParecerAgendar extends Parecer {
    idMotivo: number;
    dtAgendamento: Date;   
    tempoAdicionado: number;
}