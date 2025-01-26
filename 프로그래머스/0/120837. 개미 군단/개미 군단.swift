import Foundation

func solution(_ hp:Int) -> Int {
    var hpLeft = hp
    var rst = 0
    
    // 장군
    rst += hpLeft / 5
    hpLeft = hpLeft % 5
    // 병정
    rst += hpLeft / 3
    hpLeft = hpLeft % 3
    
    // 일개미
    rst += hpLeft
    
    return rst
    
}