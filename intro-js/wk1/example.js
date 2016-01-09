var nums = [];

for(i = 0; i <= 10; i++) {
  nums.push(i);
}

console.log(nums);

for(j = 0; j < nums.length; j++) {
  if (nums[j] % 2 === 0) {
    console.log(nums[j] + " is even");
  }
  else { 
    console.log(nums[j] + " is odd");
  }
}
