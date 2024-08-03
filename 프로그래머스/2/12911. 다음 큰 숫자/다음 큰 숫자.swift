import Foundation

// 완탐
func solution(_ n:Int) -> Int
{
    var rst: Int = n+1
    let target = String(n,radix:2).filter { $0 == "1" }.count
    
    while true {
        let tmp = String(rst,radix:2).filter { $0 == "1" }.count
        if tmp == target {
            break
        } 
        rst += 1
    }
    return rst
}