import Foundation

func solution(_ array:[Int], _ commands:[[Int]]) -> [Int] {
    var rst = [Int]()
    
    // [Int]
    for command in commands {
        let i = command[0]
        let j = command[1]
        let k = command[2]
        
        var tmp = array[i-1 ... j-1]
        
        rst.append(tmp.sorted()[k-1])
    }
    
    return rst
}