import Foundation

func solution(_ num_list:[Int]) -> [Int] {
    var rst = [Int]()
    
    let evens = num_list.filter { $0 % 2 == 0 }.count
    
    
    
    return [evens, num_list.count - evens]
}