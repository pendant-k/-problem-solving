func solution(_ num:Int) -> Int {
    var tmp = num
    var rst = 0
    
    if num == 1 {
        return 0
    }
    
    while tmp > 1 && rst <= 500 {
        if tmp % 2 == 0 {
            tmp /= 2
        } else {
            tmp = tmp * 3 + 1
        }
        
        rst += 1
    }
    
    return rst <= 500 ? rst : -1
}