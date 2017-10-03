/**
 * Author:  NeverGonnaChange
 * Project: core
 * File:    array.ts
 * Created: 03.10.2017 16:24
 */

export function isArray(arr: any): boolean {
    return arr && Object.prototype.toString.call(arr) === '[object Array]';
}
