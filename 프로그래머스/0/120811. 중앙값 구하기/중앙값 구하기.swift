import Foundation

func solution(_ array:[Int]) -> Int {
    let tmp = array.sorted()
    return tmp[Int(array.count / 2)]
}