import Foundation

func solution(_ n:Int64) -> Int64 {
    if sqrt(Double(n)) == Double(Int(sqrt(Double(n)))) {
        let tmp = sqrt(Double(n))
        return Int64(pow(tmp+1, 2))
    }
    return -1
}