# array-combination
All the possibilities of a free combinatorial array
## Install
```
npm i @nguyenphutrong/array-combination
```

## Usage
```js
import { arrayCombination } from '@nguyenphutrong/array-combination';

const options = [
    ['a', 'b', 'c'],
    ['1', '2', '3', '4']
];

const variants = arrayCombination(options);

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