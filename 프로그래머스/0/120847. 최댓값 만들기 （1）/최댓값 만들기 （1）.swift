import Foundation

func solution(_ numbers:[Int]) -> Int {
    let rst = numbers.sorted(by: >)
    return rst[0] * rst[1]
}