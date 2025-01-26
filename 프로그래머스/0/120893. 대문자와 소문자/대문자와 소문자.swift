import Foundation

func solution(_ my_string:String) -> String {
    var rst = ""
    for c in my_string {
        if c.isLowercase {
            rst += c.uppercased()
        } else {
            rst += c.lowercased()
        }
    }
    return rst
}