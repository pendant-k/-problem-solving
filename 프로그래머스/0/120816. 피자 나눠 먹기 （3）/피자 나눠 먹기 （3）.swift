import Foundation

func solution(_ slice:Int, _ n:Int) -> Int {
    var rst = 1
    while true {
        if slice * rst < n {
            rst += 1
        } else {
            break
        }
    }
    
    return rst
}