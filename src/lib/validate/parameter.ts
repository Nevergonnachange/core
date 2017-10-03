/**
 * Author:  NeverGonnaChange
 * Project: core
 * File:    parameter.ts
 * Created: 03.10.2017 16:25
 */

export interface IParams {
    value: any;
    expectedType: string;
    check: (val: any) => boolean;
}

export function validateParameter(args: IParams[]) {
    args.forEach(arg => {
        if (!arg.check(arg.value)) {
            throw new Error(`Expected ${arg.expectedType} but got ${typeof arg.value} - ${Object.prototype.toString.call(arg.value)}: ${JSON.stringify(arg.value)}`);
        }
    });
}
