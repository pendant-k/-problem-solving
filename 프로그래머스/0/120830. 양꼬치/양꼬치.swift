import Foundation

func solution(_ n:Int, _ k:Int) -> Int {
    let bonus = n / 10
    
    let rst = (12_000 * n) + (2000 * (k-bonus < 0 ? 0 : k - bonus))
    
    return rst
}