import Foundation

func solution(_ s1:[String], _ s2:[String]) -> Int {
    var rst = 0
    
    for i in s1 {
        if s2.contains(i) {
            rst += 1
        }
    }
    return rst
}