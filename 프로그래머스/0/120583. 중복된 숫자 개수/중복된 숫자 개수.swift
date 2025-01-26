import Foundation

func solution(_ array:[Int], _ n:Int) -> Int {
    var rst = 0
    
    for i in array {
        if i == n {
            rst += 1
        }
    }
    
    return rst
}