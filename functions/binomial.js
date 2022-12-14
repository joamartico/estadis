import { fact } from "./general";
import Big from "big.js";
import { Fnormal, FnormalStd } from "./normal";
import { Fbeta } from "./beta";


export function Pbinomial(r, n, p) {
	let value;
	if (n < 3000) {
		value =
			Number(fact(n) / (fact(n - r) * fact(r))) /
			(1 / (Math.pow(p, r) * Math.pow(1 - p, n - r)));
	} else {
		const a = Big((fact(n) / (fact(n - r) * fact(r))).toString());
		const b = Big(p)
			.pow(r)
			.times(Big(1 - p).pow(n - r));
		value = Number(a.times(b));
	}

	return value;
}


export function Fbinomial(r, n, p) {
	if (n < 1000) {
		let sum = 0;
		for (let i = 0; i <= r; i++) {
			sum = sum + Pbinomial(i, n, p);
		}
		return sum;
	}

	if (n > 1000) {
		return 1 - Gbinomial(r + 1, n, p);
	}

	if (n * p > 10 && n * (1 - p) > 10) {
		return Fnormal(r + 0.5, n * p, Math.sqrt(n * p * (1 - p)));
	}
}


export function Gbinomial(r, n, p) {
	if(n < 1000){
		return 1 - Fbinomial(r - 1, n, p);
	}

	if (n > 1000) { // EN QUÉ CASOS:  Gbinomial = Fbeta  ?
		return Fbeta(p, r, n - r); 
	}
	if (n * p > 10 && n * (1 - p) > 10) {
		return 1 - Fnormal(r - 0.5, n * p, Math.sqrt(n * p * (1 - p)));
	}
}
