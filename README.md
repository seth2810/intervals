# Intervals

Module for Node.JS, which converts an array of numbers to a string, following the example:

```shell
    [1,2,3,4,5,6,7,8] -> "1-8"
    [1,3,4,5,6,7,8] -> "1,3-8"
    [1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"
    [1,2,3] -> "1-3"
    [1,2] -> "1,2"
    [1,2,4] -> "1,2,4"
    [1,2,4,5,6] -> "1,2,4-6"
    [1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21"
    [1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002"
    [1] -> "1"
    [1,3,5,7,9,11] -> "1,3,5,7,9,11"`
```

[![Maintainability](https://api.codeclimate.com/v1/badges/725e37f8aa586de5b2e3/maintainability)](https://codeclimate.com/github/seth2810/intervals/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/725e37f8aa586de5b2e3/test_coverage)](https://codeclimate.com/github/seth2810/intervals/test_coverage)
[![Node CI](https://github.com/seth2810/intervals/workflows/Node.js%20CI/badge.svg)](https://github.com/seth2810/intervals/workflows/Node.js%20CI/badge.svg)
