import Foundation

func solution(_ a:Int, _ b:Int, _ n:Int) -> Int {
    // 받은 콜라
    var cnt = 0
    // 빈 병
    var bottles = n
    
    while bottles >= a {
        let tmp = bottles / a * b
        cnt += tmp
        bottles = bottles % a + tmp
    } 
    return cnt
}