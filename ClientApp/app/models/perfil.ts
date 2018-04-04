import { PerfilCliente } from './perfil-cliente';
import { PerfilProfissional } from './perfil-profissional';
import { Conjuge } from './conjuge';
import { Avalista } from './avalista';
import { MesaPropostaStatus } from './mesa-proposta-status';
import { Operacao } from './operacao/operacao';

export class Perfil {
    idProposta: string;
    propostaStatus: MesaPropostaStatus;
    perfilCliente: PerfilCliente;
    perfilProfissional: PerfilProfissional;
    conjuge: Conjuge;
    operacao: Operacao;
    avalista: Avalista[];
}