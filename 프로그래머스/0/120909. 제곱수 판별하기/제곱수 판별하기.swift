import Foundation

func solution(_ n:Int) -> Int {
    let tmp = sqrt(Double(n))
    return tmp == floor(tmp) ? 1 : 2
}