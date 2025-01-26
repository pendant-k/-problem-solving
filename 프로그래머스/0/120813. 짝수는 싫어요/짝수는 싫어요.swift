import Foundation

func solution(_ n:Int) -> [Int] {
    Array((1...n).filter { $0 % 2 != 0 })
}