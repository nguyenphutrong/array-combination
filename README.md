# array-combination
All the possibilities of a free combinatorial array
## Install
```
npm i @nguyenphutrong/array-combination
```

## Usage
```js
const combination = require('arr-combination')

const options = [
    ['a', 'b', 'c'],
    ['x', 'y', 'z'],
    ['1', '2', '3', '4', '5']
];

const variants = combination(options);

console.log(variants);
```
Output:

```js
[
  [ 'a', '1' ], [ 'b', '1' ],
  [ 'c', '1' ], [ 'a', '2' ],
  [ 'b', '2' ], [ 'c', '2' ],
  [ 'a', '3' ], [ 'b', '3' ],
  [ 'c', '3' ], [ 'a', '4' ],
  [ 'b', '4' ], [ 'c', '4' ]
]
```