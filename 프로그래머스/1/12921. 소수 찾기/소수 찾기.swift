import Foundation 

func solution(_ n:Int) -> Int {
    var rst = 0
    for i in 2 ... n {
        if fc(i) {
            rst += 1
        }
    }
    return rst
}

func fc(_ num:Int) -> Bool {
    
    if num == 2 {
        return true
    }
    
    for j in 2 ..< num {
   		if num % j == 0 {
    		return false        
        }
        
        if j >= Int(sqrt(Double(num))) {
            break
        }
    }
    
    return true
}