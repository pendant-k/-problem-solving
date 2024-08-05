import Foundation
// use stack

func solution(_ s:String) -> Int{
    
    var answer:Int = 1
    var stack: [Character] = []
    
    for c in s {
        if stack.last == c {
            stack.removeLast()
        } else {
            stack.append(c)
        }
    }
    
    
    return stack.isEmpty ? 1 : 0
}