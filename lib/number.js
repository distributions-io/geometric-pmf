'use strict';

// MODULES //

var isNonNegativeInteger = require( 'validate.io-nonnegative-integer');


// FUNCTIONS //

var pow = Math.pow;


// PMF //

/**
* FUNCTION: pmf( x, p )
*	Evaluates the probability mass function (PMF) for a Geometric distribution with success probability `p` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} p - success probability
* @returns {Number} evaluated PMF
*/
function pmf( x, p ) {
	var q;
	if ( x !== x) {
		return NaN;
	}
	if ( isNonNegativeInteger( x ) ) {
		q = 1 - p;
		return p * pow( q, x - 1 );
	}
	return 0;
} // end FUNCTION pmf()


// EXPORTS //

module.exports = pmf;
