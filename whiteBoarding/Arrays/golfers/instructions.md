## Sort open and senior golfers

Build a function that takes in an array of golfer data.  Golfer data is defined as a subarray tuple with two values, age and handicap, i.e. `[65, 4]`.

The function should sort out whether the person is in the open or senior category.  `senior` is defined by the player is older than `55` and has a handicap greater than `5`.

If the golfer fits this category a string `"senior"` should take the place of the array, otherwise the string `"open"` should be returned.