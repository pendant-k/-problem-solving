import Foundation

func solution(_ num_list:[Int], _ n:Int) -> [[Int]] {
    var rst = [[Int]]()
    
    var tmp = [Int]()
    for i in num_list {
        if tmp.count == n {
            rst.append(tmp)
            tmp = []
        }
        tmp.append(i)
    }
    rst.append(tmp)
    
    return rst
}