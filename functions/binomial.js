import { fact } from "./general";

import Big from "big.js";


export function Pbinomial(r, n, p) {
	let value;
	if (n < 5000) {
		value =
			Number(fact(n) / (fact(n - r) * fact(r))) /
			(1 / (Math.pow(p, r) * Math.pow(1 - p, n - r)));
	} else {
		const a = Big((fact(n) / (fact(n - r) * fact(r))).toString());
		const b = Big(p).pow(r).times(Big(1 - p).pow(n - r));
		value = Number(a.times(b));
	}

	return value;
}

export function Fbinomial(r, n, p) {
	let sum = 0;
	for (let i = 0; i <= r; i++) {
		sum = sum + Pbinomial(i, n, p);
	}
	return sum;
}

export function Gbinomial(r, n, p) {
	// let sum = 0;
	// for (let i = r; i <= n; i++) {
	// 	sum = sum + Pbinomial(i, n, p)
	// }
	// return sum;
	return 1 - Fbinomial(r - 1, n, p);
}
