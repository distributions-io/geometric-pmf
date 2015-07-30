'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( p )
*	Partially applies success probability `p` and returns a function for evaluating the probability density function (PDF) for a Geometric distribution.
*
* @param {Number} p - success probability
* @returns {Function} PDF
*/
function partial( p ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Geometric distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
