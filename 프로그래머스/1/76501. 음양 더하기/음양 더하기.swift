import Foundation

func solution(_ absolutes:[Int], _ signs:[Bool]) -> Int {
    var rst = 0
    for idx in 0 ..< absolutes.count {
        if signs[idx] {
            rst += absolutes[idx]
        } else {
            rst -= absolutes[idx]
        }
    }
    
    return rst
}