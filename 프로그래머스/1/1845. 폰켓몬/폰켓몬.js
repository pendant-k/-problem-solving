function solution(nums) {
    let temp = [... new Set(nums)];
    return temp.length > nums.length /2 ? nums.length/2 : temp.length
}