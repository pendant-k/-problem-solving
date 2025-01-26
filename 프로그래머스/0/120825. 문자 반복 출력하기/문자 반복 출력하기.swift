import Foundation

func solution(_ my_string:String, _ n:Int) -> String {
    var rst = ""
    for c in my_string {
        for _ in 0 ..< n {
            rst += String(c)
        }
    }
    return rst
}