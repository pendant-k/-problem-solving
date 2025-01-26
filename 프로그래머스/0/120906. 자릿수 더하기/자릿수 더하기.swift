import Foundation

func solution(_ n:Int) -> Int {
    var rst = 0
    for c in String(n) {
        rst += Int(String(c))!
    }
    return rst
}