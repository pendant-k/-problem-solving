import Foundation

func solution(_ n:Int) -> Int {
    var rst = 0
    
    if n == 1 {
        return 1
    }
    
    for i in 1 ... n / 2 {
        if n % i == 0 {
            rst += 1
        }
    }
    return rst + 1
}