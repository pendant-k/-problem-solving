import Foundation

func solution(_ strlist:[String]) -> [Int] {
    var rst = [Int]()
    
    for str in strlist {
        rst.append(str.count)
    }
    
    return rst
}