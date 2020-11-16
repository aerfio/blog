---
title: Cache locality
date: "2020-11-16T21:02:02.284Z"
description: "Very, very short tldr about key concept of locality of reference"
categories: [golang]
sources:
  [
    https://teivah.medium.com/go-and-cpu-caches-af5d32cc5592,
    https://github.com/teivah/go-cpu-caches,
    https://en.wikipedia.org/wiki/Locality_of_reference,
  ]
---

## TLDR

If you loop through two dimensional array, loop through rows first. In essence do it like this:

```go
for i := 0; i < matrixLength; i++ {
	for j := 0; j < matrixLength; j++ {
		data:=matrix[i][j]
	}
}
```

And not like this:

```go
for i := 0; i < matrixLength; i++ {
	for j := 0; j < matrixLength; j++ {
		data:=matrix[j][i]
	}
}
```

I said it would be short, eh? Fortunately this method of writing loops is more natural, so usually we get it right.
