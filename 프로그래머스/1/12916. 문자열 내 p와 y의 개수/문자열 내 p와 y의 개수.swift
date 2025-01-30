import Foundation

func solution(_ s:String) -> Bool
{
    var countP = 0
    var countY = 0
    
    for c in s.lowercased() {
        if c == "p" {
            countP += 1
        }
        if c == "y" {
            countY += 1
        }
    }
    
    
    return countP == countY ? true : false

}