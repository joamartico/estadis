import { FnormalStd } from "./normal";

var { jStat } = require('jstat')


export function Ppoisson(r, m) {
	return jStat.poisson.pdf(r, m)
}

export function Fpoisson(r, m) {
    if(m > 15) {
        return FnormalStd( (r+0.5-m) / Math.sqrt(m))
    }

    return jStat.poisson.cdf(r, m)
}

export function Gpoisson(r, m) {
    if(m > 15) {
        return 1 - FnormalStd( (r-0.5-m) / Math.sqrt(m))
    }

	return 1 - Fpoisson(r - 1, m);
}
