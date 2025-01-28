import Foundation

func solution(_ n:Int) -> Int {
    var rst = 1
    while true {
        if (6 * rst) % n == 0 {
            break
        }
        rst += 1
    }
    return rst
}