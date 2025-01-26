import Foundation

func solution(_ numbers:[Int]) -> Int {
    var rst = numbers[0] * numbers[1]
     
    for i in 0 ..< numbers.count {
        for j in 0 ..< numbers.count {
            if i == j {
                continue
            }
            
            let tmp = numbers[i] * numbers[j]
            if  tmp >= rst {
                rst = tmp
            }
        }
    }
    
    return rst
}