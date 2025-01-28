import Foundation

func solution(_ age:Int) -> String {
    let arr : [String] = ["a","b","c","d","e","f","g","h","i","j"]
    var rst = ""
    
    for num in String(age) {
        rst += arr[Int(String(num))!]
    }
    
    return rst
}