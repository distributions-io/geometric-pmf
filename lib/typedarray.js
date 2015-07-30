'use strict';

// MODULES //

var partial = require( './partial.js' );


// PMF //

/**
* FUNCTION: pmf( out, arr, p )
*	Evaluates the probability mass function (PMF) for a Geometric distribution with success probability `p` for each array element.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @param {Number} p - success probability
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function pmf( y, x, p ) {
	var len = x.length,
		fcn,
		i;

	fcn = partial ( p );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = fcn( x[ i ] );
	}
	return y;
} // end FUNCTION pmf()


// EXPORTS //

module.exports = pmf;
