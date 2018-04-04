import { Component, Input } from '@angular/core';
import { Event } from '@angular/router/src/events';

export class FormatacaoService {

    tam: number;
    value: string;

    formataTelefone(value: string) {
        if (value) {
            value = value.toString();
            if (value.length === 8) {
                return value.substring(0, 4).concat("-")
                    .concat(value.substring(4, 8))
            }
            if (value.length === 9) {
                return value.substring(0, 5).concat("-")
                    .concat(value.substring(5, 8))
            }
        }
        return value;
    }

    formataCelular(value: string) {
        if (value) {
            value = value.toString();
            if (value.length === 8) {
                return value.substring(0, 4).concat("-")
                    .concat(value.substring(5, 8))
            }
            if (value.length === 9) {
                return value.substring(0, 5).concat("-")
                    .concat(value.substring(5, 8))
            }
        }
        return value;
    }

    formataCep(cep: string): string {
        if (!isString(cep)) {
            return cep;
        }

        if (cep && cep.length === 7) {
            cep = "0" + cep;
        }

        if (cep && cep.length === 8) {
            return `${cep.substr(0, 5)}-${cep.substr(5, 3)}`;
        }

        return cep;
    }

    formataCnpj(cnpj: string): string {
        if (cnpj) {
            cnpj = cnpj.toString();
            if (cnpj.length === 13) {
                cnpj = '0' + cnpj.toString();
            }
            if (cnpj.length === 14) {
                return cnpj.substring(0, 2).concat(".")
                    .concat(cnpj.substring(2, 5))
                    .concat(".")
                    .concat(cnpj.substring(5, 8))
                    .concat("/")
                    .concat(cnpj.substring(8, 12))
                    .concat("-")
                    .concat(cnpj.substring(12, 14))
            }
            return cnpj;
        }
        return "";
    }


    removeCep(cep: string): string {
        if (cep == undefined || cep == null || !isString(cep)) {
            return cep;
        }
        return cep.replace('-', '');
    }

    removeCnpj(cnpj: string): string {
        if (cnpj == undefined || cnpj == null || !isString(cnpj)) {
            return cnpj;
        }
        return cnpj.replace(/\//g, "").replace(/-/g, "").replace(/\./g, "");
    }

    removeCpf(cpf: string): string {
        if (cpf == undefined || cpf == null || !isString(cpf)) {
            return cpf;
        }
        return cpf.replace(/\//g, "").replace(/-/g, "").replace(/\./g, "");
    }

    mascaraCep($event: any) {
        if ($event == undefined || $event.keyCode == undefined) {
            return $event.target.value;
        }

        if (!(($event.keyCode < 48 || $event.keyCode > 57) && ($event.keyCode < 96 || $event.keyCode > 105) && $event.keyCode != 46 && $event.keyCode != 8)) {
            if ($event.keyCode != undefined && $event.keyCode != "" && $event.keyCode != null) {
                var v = $event.target.value;
                v = v.replace(/\D/g, "") // permite digitar apenas numero          
                v = v.replace(/(\d{5})(\d{1,3})$/, "$1-$2") // formatacao de cep

                $event.target.value = v;
            }
        }
    }

    mascaraCnpj($event: any): any {
        if ($event == undefined || $event.keyCode == undefined) {
            return this.value;
        }

        if (!(($event.keyCode < 48 || $event.keyCode > 57) && ($event.keyCode < 96 || $event.keyCode > 105) && $event.keyCode != 46 && $event.keyCode != 8)) {
            if ($event.keyCode != undefined && $event.keyCode != "" && $event.keyCode != null) {
                var value = $event.toString();
                if (value.length === 13) {
                    value = '0' + value.toString();
                }
                if (value.length === 14) {
                    return value.substring(0, 2).concat(".")
                        .concat(value.substring(2, 5))
                        .concat(".")
                        .concat(value.substring(5, 8))
                        .concat("/")
                        .concat(value.substring(8, 12))
                        .concat("-")
                        .concat(value.substring(12, 14))
                }
            }
            return this.value;
        }
    }

    mascaraValor($event: any): any {

        if ($event.target.value.length < 12) {
            if (!(($event.keyCode < 48 || $event.keyCode > 57) && ($event.keyCode < 96 || $event.keyCode > 105) && $event.keyCode != 46 && $event.keyCode != 8)) {
                if ($event.keyCode != undefined && $event.keyCode != "" && $event.keyCode != null) {
                    var v = $event.target.value;
                    v = v.replace(/\D/g, "") // permite digitar apenas numero
                    v = v.replace(/(\d{1})(\d{14})$/, "$1.$2") // coloca ponto antes dos ultimos digitos
                    v = v.replace(/(\d{1})(\d{11})$/, "$1.$2") // coloca ponto antes dos ultimos 11 digitos
                    v = v.replace(/(\d{1})(\d{8})$/, "$1.$2") // coloca ponto antes dos ultimos 8 digitos
                    v = v.replace(/(\d{1})(\d{5})$/, "$1.$2") // coloca ponto antes dos ultimos 5 digitos
                    v = v.replace(/(\d{1})(\d{1,2})$/, "$1,$2") // coloca virgula antes dos ultimos 2 digitos
                    // $event.target.value = v;
                    return v;
                }
                else {
                    return $event.target.value;
                }
            }
            else {
                return $event.target.value;
            }
        }
        else {
            //$event.target.value = "";
            return "";
        }
    }

    //Aplica a máscara no campo
    //Função para ser utilizada nos eventos do input para formatação dinâmica
    mascaraCpfCnpj($event: any) {
        this.value = $event.target.value;

        if (($event.keyCode < 48 || $event.keyCode > 57) && ($event.keyCode < 96 || $event.keyCode > 105) && $event.keyCode != 46 && $event.keyCode != 8) {
            return false;
        }

        var vr = this.value;
        vr = vr.replace(/\//g, "");
        vr = vr.replace(/-/g, "");
        vr = vr.replace(/\./g, "");
        var tam = vr.length;

        if (tam <= 2) {
            this.value = vr;
        }
        if ((tam > 2) && (tam <= 5)) {
            this.value = vr.substr(0, tam - 2) + '.' + vr.substr(tam - 2, tam);
        }
        if ((tam >= 6) && (tam <= 8)) {
            this.value = vr.substr(0, tam - 5) + '.' + vr.substr(tam - 5, 3) + '-' + vr.substr(tam - 2, tam);
        }
        if ((tam >= 9) && (tam <= 11)) {
            this.value = vr.substr(0, tam - 8) + '.' + vr.substr(tam - 8, 3) + '.' + vr.substr(tam - 5, 3) + '-' + vr.substr(tam - 2, tam);
        }
        if ((tam == 12)) {
            this.value = vr.substr(tam - 12, 3) + '.' + vr.substr(tam - 9, 3) + '/' + vr.substr(tam - 6, 4) + '-' + vr.substr(tam - 2, tam);
        }
        if ((tam > 12) && (tam <= 14)) {
            this.value = vr.substr(0, tam - 12) + '.' + vr.substr(tam - 12, 3) + '.' + vr.substr(tam - 9, 3) + '/' + vr.substr(tam - 6, 4) + '-' + vr.substr(tam - 2, tam);
        }
    }

    convertMillisecondsToDigitalClock(ms: number): string {
        var hours = Math.floor(ms / 3600000); // 1 Hour = 36000 Milliseconds
        var minutes = Math.floor((ms % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
        var seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
        return this.pad(hours, 2) + ":" + this.pad(minutes, 2) + ":" + this.pad(seconds, 2);
    }

    pad(num: number, size: number): string {
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    // TODO: refatorar para Controller
    setDate(value: Date) {
        var date = new Date();
        var userTimezoneOffset = date.getTimezoneOffset() * 60000;
        var miliseconds = new Date(value).getTime();
        return new Date(miliseconds + userTimezoneOffset);
    }

    // TODO: refatorar para Controller
    getDate(value: string) {
        if (value != undefined && value.length == 10) {
            if (Date.parse(value.substring(6, 10) + '/' + value.substring(3, 5) + '/' + value.substring(0, 2))) {
                var ano = value.substring(6, 10);
                var mes = Number(value.substring(3, 5));
                var dia = value.substring(0, 2);
                var data;
                if (mes < 10) {
                    data = ano + '-0' + mes.toString() + '-' + dia + 'T12:00:00Z';
                } else {
                    data = ano + '-' + mes.toString() + '-' + dia + 'T12:00:00Z';
                }
                return new Date(data);
            }
        }
        return null;
    }
}

export function isString(value: any): boolean {
    return typeof value === 'string';
}
