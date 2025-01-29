import Foundation

func solution(_ i:Int, _ j:Int, _ k:Int) -> Int {
    var tmp = [String]()
    var rst = 0
    
    for num in i ... j {
        tmp.append(String(num))
    }
    
    for item in tmp {
        for c in Array(item) {
            if String(c) == String(k) {
            	rst += 1
            }
        }
    }
    
    return rst
}