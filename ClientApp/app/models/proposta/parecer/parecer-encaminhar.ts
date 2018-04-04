import { Parecer } from "./parecer";
import { Pendencia } from "../../pendencia";

export class ParecerEncaminhar extends Parecer {
    codUsuarioEnc: string;
    nomeUsuario: string;
    idPrioridade: number;
    idComite: number;
    dsTipoComite: string;
    idMotivo: number;
    pendencias: Pendencia[];    
}