import Foundation

func solution(_ n:Int) -> Int {
    var rst = 0
    
    for i in 1 ..< n + 1 {
        if i % 2 == 0 {
        	rst += i    
        }
    }
    return rst
}