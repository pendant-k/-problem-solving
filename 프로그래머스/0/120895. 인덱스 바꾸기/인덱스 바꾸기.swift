import Foundation

func solution(_ my_string:String, _ num1:Int, _ num2:Int) -> String {
    var arr = [String]()
    
    for c in my_string {
        arr.append(String(c))
    }
    
    var tmp = arr[num1]
    arr[num1] = arr[num2]
    arr[num2] = tmp
    
    return String(arr.joined(separator: ""))
}