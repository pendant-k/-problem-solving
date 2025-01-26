import Foundation

func solution(_ array:[Int]) -> [Int] {
    // max , index
    var rst = [0,0]
    
    for idx in array.indices {
        let tmp = array[idx]
        if tmp >= rst[0] {
            rst[0] = tmp
            rst[1] = idx
        }
    }
    return rst
    
}