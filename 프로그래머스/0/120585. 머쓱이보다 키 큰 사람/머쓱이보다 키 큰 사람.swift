import Foundation

func solution(_ array:[Int], _ height:Int) -> Int {
    var rst = 0
    for i in array {
        if i > height {
            rst += 1
        }
    }
    return rst
}