import Foundation

func solution(_ my_string:String) -> Int {
    let cmp = "0123456789"
    let tmp = Array(my_string.filter { cmp.contains($0) })
    return tmp.map{ Int(String($0))! }.reduce(0, +)
}