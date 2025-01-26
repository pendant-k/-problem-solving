import Foundation

func solution(_ money:Int) -> [Int] {
    [Int(money / 5_500), money % 5_500]
}