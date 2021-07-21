var findDisappearedNumbers = function (nums) {
  //this produces 8
  var numsLength = nums.length;

  //loops this 8 times
  for (let i = 0; i < numsLength; ++i) {
    //executes if statement 8 times, if nums array includes 0, 1, 2, etc
    if (nums.includes([i])) {
      var newArray = nums.pop([i]);
    }
  }
  return newArray;
};
