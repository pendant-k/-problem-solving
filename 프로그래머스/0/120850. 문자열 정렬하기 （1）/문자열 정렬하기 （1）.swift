import Foundation

func solution(_ my_string:String) -> [Int] {
    
    let numbers = Array(my_string).filter { "1234567890".contains($0) }
    
    return numbers.map { Int(String($0))! }.sorted()
}