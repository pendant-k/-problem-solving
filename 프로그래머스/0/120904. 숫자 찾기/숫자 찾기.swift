import Foundation

func solution(_ num:Int, _ k:Int) -> Int {
    let arr = Array(String(num))
    for i in 0 ..< arr.count {
        if String(arr[i]) == String(k) {
            return i + 1
        }
    }
    return -1
}