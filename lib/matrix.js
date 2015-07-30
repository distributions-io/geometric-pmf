'use strict';

// MODULES //

var partial = require( './partial.js' );


// PMF //

/**
* FUNCTION: pmf( out, matrix, p )
*	Evaluates the probability mass function (PMF) for a Geometric distribution with success probability `p` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} p - success probability
* @returns {Matrix} output matrix
*/
function pmf( y, x, p ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'pmf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( p );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION pmf()


// EXPORTS //

module.exports = pmf;
