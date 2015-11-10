options( digits = 16 )
library( jsonlite )


p = 0.76
x = seq( 0, 100, 0.5 )
y = dgeom( x, p )

cat( y, sep = ",\n" )

data = list(
	p = p,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
