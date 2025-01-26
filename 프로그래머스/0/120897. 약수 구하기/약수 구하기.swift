import Foundation

func solution(_ n:Int) -> [Int] {
    Array((1...n).filter { n % $0 == 0 })
}