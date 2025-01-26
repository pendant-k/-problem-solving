import Foundation

func solution(_ rsp:String) -> String {
    var rst: String = ""
    
    for c in rsp {
        if c == "2" {
            rst += "0"
        }
        
        if c == "0" {
            rst += "5"
        }
        
        if c == "5" {
            rst += "2"
        }
    }
    
    return rst
}