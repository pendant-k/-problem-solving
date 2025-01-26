import Foundation

func solution(_ n:Int) -> Int {
    var rst = 0
    
    while rst * 7 < n {
     	rst += 1   
    }
    
    return rst
}