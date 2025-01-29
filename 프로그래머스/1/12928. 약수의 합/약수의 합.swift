func solution(_ n:Int) -> Int {
    var rst = 0
    
    if n == 0 {
        return rst
    }
    
    for i in 1 ... n {
        if n % i == 0 {
            rst += i
        }
    }
    
    return rst
}