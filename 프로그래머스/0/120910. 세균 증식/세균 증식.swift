import Foundation

func solution(_ n:Int, _ t:Int) -> Int {
    var rst = n
    for _ in 0 ..< t {
        rst *= 2
    }
    
    return rst
}