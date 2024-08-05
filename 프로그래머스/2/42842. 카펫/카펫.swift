import Foundation

func solution(_ brown:Int, _ yellow:Int) -> [Int] {
    // w >= h
    
    // w -> 모든 약수 ? (>=3)
    // h = total / w
    
    // (w-2) * (h-2) = yellow
    let total: Int = brown + yellow
    var candidates: [Int] = []
    var rst: [Int] = []
    
    // find width cand
    for i in 3...total {
        if total % i == 0 {
            candidates.append(i)
        }
    }
    
    for w in candidates {
        let h = total / w
        
        if (w-2) * (h-2) == yellow {
            rst = [w,h]
        }
    }
    
    return rst
    
    
    
}