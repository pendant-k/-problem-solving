import Foundation

// using two pnt
func solution(_ numbers:[Int]) -> Int {
    var rst = 0
    
    for i in 0 ..< numbers.count {
        let cnt = numbers[i]
        
        for j in 0 ..< numbers.count {
            
            if i == j {
                continue
            } else {
            	let tmp = numbers[j]
                if cnt * tmp >= rst {
                    rst = cnt * tmp 
                }
            }
            
        }
    }
    
    
    return rst
}