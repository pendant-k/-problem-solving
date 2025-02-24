import Foundation

func solution(_ answers:[Int]) -> [Int] {
    let one = [1,2,3,4,5]
    let two = [2,1,2,3,2,4,2,5]
    let three = [3,3,1,1,2,2,4,4,5,5]
    
    var counts = [1 : 0, 2 : 0, 3 : 0]
    
    for i in 0 ..< answers.count {
        
        if answers[i] == one[i % one.count] {
            counts[1]! += 1
        }
        
        if answers[i] == two[i % two.count] {
            counts[2]! += 1
        }
        
        if answers[i] == three[i % three.count] {
            counts[3]! += 1
        }
    }
    return counts.sorted{ $0.key < $1.key }.filter { $0.value == counts.values.max() }.map { $0.key }
}