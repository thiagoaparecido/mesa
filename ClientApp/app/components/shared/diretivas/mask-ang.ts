
import { Directive, HostListener, Input } from '@angular/core';
import {  NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Directive({
 selector: '[kzMask]',
 providers: [{
   provide: NG_VALUE_ACCESSOR, 
   useExisting: KzMaskDirective, 
   multi: true 
 }]
})
export class KzMaskDirective implements ControlValueAccessor {

 onTouched: any;
 onChange: any;

 @Input('kzMask') kzMask: string;

 writeValue(value: any): void {
 }

 registerOnChange(fn: any): void {
   this.onChange = fn;
 }

 registerOnTouched(fn: any): void {
   this.onTouched = fn;
 }
 @HostListener('keyup', ['$event']) 
 onKeyup($event: any) {

  if (!(($event.keyCode < 48 || $event.keyCode > 57) && ($event.keyCode < 96 || $event.keyCode > 105) && $event.keyCode != 46 && $event.keyCode != 8)) {
      
	 var valor = $event.target.value.replace(/\D/g, '');

   if ($event.keyCode != 8) {
    if (valor.length > 2 && valor.length < 4)
    {
      $event.target.value = $event.target.value + ".";
    }
    if (valor.length > 5 && valor.length < 7)
    {
      $event.target.value = $event.target.value + ".";
    }
    if (valor.length > 8 && valor.length < 10)
    {
      $event.target.value = $event.target.value + "-";
    }
    if(valor.length > 11)
    {
      if(valor.length === 12)
      {
          $event.target.value = $event.target.value.replace(/\D/g, '');
          $event.target.value = valor.substring(0, 2) + "." + valor.substring(2, 5) + "." + valor.substring(5, 8) + "/" + valor.substring(8, 12);
      }
      if(valor.length > 11 && valor.length < 13)
      {
        $event.target.value =  $event.target.value + "-";
      }
    }   
  }
  }
  else
  {
    if($event.keyCode === 86 || $event.keyCode === 17 || $event.keyCode === 13)
    {
    }
    else
    {
      $event.target.value = $event.target.value.replace($event.target.value.substring($event.target.value.length - 1,$event.target.value.length),"");
    }
  }
 }

 @HostListener('blur', ['$event']) 
 onBlur($event: any) {
 }


}