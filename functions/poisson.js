var { jStat } = require('jstat')


export function Ppoisson(r, m) {
	return jStat.poisson.pdf(r, m)
}

export function Fpoisson(r, m) {
    return jStat.poisson.cdf(r, m)
}

export function Gpoisson(r, m) {
	return 1 - Fpoisson(r - 1, m);
}
