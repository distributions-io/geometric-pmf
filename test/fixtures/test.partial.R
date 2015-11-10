options( digits = 16 )
library( jsonlite )


p = 0.02
x = c( -2, 0, 2.5, 5 )
y = dgeom( x + 1, p )

cat( y, sep = ",\n" )

data = list(
	p = p,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
