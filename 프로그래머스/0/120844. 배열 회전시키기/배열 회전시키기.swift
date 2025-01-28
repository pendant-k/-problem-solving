import Foundation

func solution(_ numbers:[Int], _ direction:String) -> [Int] {
    var rst = [Int]()
    let cnt = numbers.count
    if direction == "left" {
        let tmp = numbers[0]
        
        for i in 1 ..< cnt {
            rst.append(numbers[i])
        }
        rst.append(tmp)
        
    } else {
        rst.append(numbers[cnt - 1])
        for i in 0 ..< cnt - 1 {
            rst.append(numbers[i])
        }
    }
    
    return rst
}