import Foundation

func solution(_ rny_string:String) -> String {
    var tmp:String = ""
    if rny_string.contains("m") {
        for c in rny_string {
            if c == "m" {
                tmp += "rn"
            } else {
                tmp += String(c)
            }
        }
        return tmp
    } else {
        return rny_string
    }
}