import { Parecer } from "./parecer";
import { Pendencia } from "../../pendencia";

export class ParecerAprovar extends Parecer {    
    idMotivo: number;
    pendencias: Pendencia[];   
}