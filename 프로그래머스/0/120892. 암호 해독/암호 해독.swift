import Foundation

func solution(_ cipher:String, _ code:Int) -> String {
    let arr = Array(cipher)
    var rst = ""
    for i in 1 ... cipher.count {
        if i % code == 0 {
            rst += String(arr[i-1])
        }
    }
    
    return rst
}