'use strict';

// MODULES //

var isNonNegativeInteger = require( 'validate.io-nonnegative-integer');


// FUNCTIONS //

var pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( p )
*	Partially applies success probability `p` and returns a function for evaluating the probability mass function (PMF) for a Geometric distribution.
*
* @param {Number} p - success probability
* @returns {Function} PMF
*/
function partial( p ) {

	/**
	* FUNCTION: pmf( x )
	*	Evaluates the probability mass function (PMF) for a Geometric distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PMF
	*/
	return function pmf( x ) {
		var q;
		if ( x !== x) {
			return NaN;
		}
		if ( isNonNegativeInteger( x ) ) {
			q = 1 - p;
			return p * pow( q, x - 1 );
		}

		return 0;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
