import Foundation

func solution(_ numbers:[Int]) -> [Int] {
    var rst: [Int] = []
    
    for i in 0...numbers.count-1 {
        for j in numbers[(i+1)...] {
            let tmp = numbers[i] + j
            if !rst.contains(tmp) {
                rst.append(tmp)
            }
        }
    }
    
    return rst.sorted()
}