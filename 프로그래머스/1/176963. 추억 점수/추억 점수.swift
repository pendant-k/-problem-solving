import Foundation

func solution(_ name:[String], _ yearning:[Int], _ photo:[[String]]) -> [Int] {
    var rst: [Int] = []
    var dict: [String:Int] = [:]
    // init dict
    for i in 0..<name.count {
        dict[name[i]] = yearning[i]
    }
    
    for p in photo {
        var tempSum = 0
        for item in p {
            if dict[item] != nil {
                tempSum += dict[item]!
            }
        }
        rst.append(tempSum)
    }
    
    return rst
}