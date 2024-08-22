import Foundation

func solution(_ k:Int, _ score:[Int]) -> [Int] {
    // result value (save every day's lowest score)
    var rst: [Int] = Array()
    var awards: [Int] = Array()
    
    for i in score {
        if awards.count < k {
            awards.append(i)
        } else {
            if awards.last! < i {
                awards.popLast()
                awards.append(i)
            }
        }
        awards.sort(by: >)
        rst.append(awards.last!)
    }
    return rst
}