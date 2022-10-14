import { fact } from "./factorial";

export function Pbinomial(r, n, p) {
	let value = Number(fact(n) / (fact(n - r) * fact(r))) * Math.pow(p, r) * Math.pow(1 - p, n - r);
	return value;
}

export function Fbinomial(r, n, p) {
	let sum = 0;
	for (let i = 0; i <= r; i++) {
		sum = sum + Pbinomial(i, n, p)
	}
	return sum;
}

export function Gbinomial(r, n, p) {
	// let sum = 0;
	// for (let i = r; i <= n; i++) {
	// 	sum = sum + Pbinomial(i, n, p)
	// }
	// return sum;
	return 1 - Fbinomial(r-1, n, p)
}