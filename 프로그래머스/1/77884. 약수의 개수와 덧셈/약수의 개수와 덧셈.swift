import Foundation

func solution(_ left:Int, _ right:Int) -> Int {
    var rst = 0
    for i in left ... right {
        let tmp = findAli(i)
        if tmp % 2 == 0 {
            rst += i
        } else {
            rst -= i
        }
            
    }
    return rst
}

func findAli(_ num: Int) -> Int {
    var cnt = 0
    
    for i in 1 ... num {
        if num % i == 0 {
            cnt += 1
        }
    }
    return cnt
}