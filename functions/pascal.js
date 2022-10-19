import { fact } from "./general";

import Big from "big.js";



export function Ppascal(n, r, p) {
	let value;
	if (n < 500) {
		value =
			Number(fact(n-1) / (fact((n-1 - (r-1))) * fact(r-1))) /
			(1 / (Math.pow(p, r) * Math.pow(1 - p, n - r)));
	} else {
		const a = Big((fact(n-1) / (fact((n-1) - (r-1)) * fact(r-1))).toString());
		const b = Big(p).pow(r).times(Big(1 - p).pow(n - r));
		value = Number(a.times(b));
	}

	return value;
}

export function Fpascal(n, r, p) {

	// if(n * p > 10 && n *(1-p) > 10){
	// 	return Fnormal(r+0.5, n*p, Math.sqrt(n*p*(1-p)))
	// }

	let sum = 0;
	for (let i = r; i <= n; i++) {
		sum = sum + Ppascal(r, i, p);
	}
	return sum;
}

export function Gpascal(n, r, p) {
	// if(n * p > 10 && n *(1-p) > 10){
	// 	return 1 - Fnormal(r-0.5, n*p, Math.sqrt(n*p*(1-p)))
	// }

	return 1 - Fpascal(r, n - 1, p);
}
