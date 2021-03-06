/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Module to be tested:
	pmf = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor pmf', function tests() {

	var validationData = require( './fixtures/accessor.json' ),
		p = validationData.p;

	it( 'should export a function', function test() {
		expect( pmf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Geometric pmf using an accessor', function test() {
		var data, actual, expected, i;

		data = validationData.data.map( function( e ) {
			return {'x': e};
		});
		actual = new Array( data.length );

		actual = pmf( actual, data, p,getValue );

		expected = validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		});

		for ( i = 0; i < actual.length; i++ ) {
			if ( isFiniteNumber( actual[ i ] ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual[ i ], expected[ i ], 1e-14 );
			}
		}

		function getValue( d ) {
			return d.x;
		}

	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pmf( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( data.length );
		actual = pmf( actual, data, p, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
