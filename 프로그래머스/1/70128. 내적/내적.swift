import Foundation

func solution(_ a:[Int], _ b:[Int]) -> Int {
    var rst = 0
    for idx in 0 ..< a.count {
        rst += (a[idx] * b[idx])
    }
    
    return rst
}