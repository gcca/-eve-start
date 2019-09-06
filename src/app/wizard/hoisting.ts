import 'reflect-metadata';

import { Type } from '@angular/core';

export interface HoistedRef { (): any; }

export default function hoist(ref: HoistedRef): Type<any> {
  (ref as any).__hoisting_ref__ = hoist;

  Reflect.defineMetadata('__hoisting_ref__', hoist, ref);
  (ref as any).toString = function() { return stringify(this()); };
  return (<Type<any>><any>ref);
}

//export function resolveHoistedRef(type: any): any {
  //if (typeof type === 'function' && type.hasOwnProperty('__hoisting_ref__') &&
      //type.__hoisting_ref__ === hoist) {
    //return (<HoistedRef>type)();
  //} else {
    //return type;
  //}
//}

function stringify(token: any): string {
  return Object.prototype.toString.call(token);
}
