export class FormatacaoService {

    formataCep(cep: string): string {
        if (!isString(cep)) {
            return cep;
        }

        if (cep && cep.length === 8) {
            return `${cep.substr(0, 5)}-${cep.substr(5, 3)}`;
        }

        return cep;
    }

    removeCep(cep: string): string {
        if (!isString(cep)) {
            return cep;
        }
        
        return cep.replace('-','');
    }

    mascaraCep($event: any) {

        if (!(($event.keyCode < 48 || $event.keyCode > 57) && ($event.keyCode < 96 || $event.keyCode > 105) && $event.keyCode != 46 && $event.keyCode != 8))
        {
            if($event.keyCode != undefined && $event.keyCode != "" && $event.keyCode != null)
            {
                var v = $event.target.value;
                v=v.replace(/\D/g,"") // permite digitar apenas numero          
                v=v.replace(/(\d{5})(\d{1,3})$/,"$1-$2") // formatacao de cep
                
                $event.target.value = v;                
            }
        }

    }
}

export function isString(value: any): boolean {
    return typeof value === 'string';
}
