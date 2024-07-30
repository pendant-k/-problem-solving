import Foundation

func solution(_ food:[Int]) -> String {
    var rst: String = ""
    for i in 1...(food.count - 1) {
        let currentFood = food[i] / 2
        for cnt in 0..<currentFood {
            rst += String(i)
        }
    }
    let suffix = "0" + rst.reversed()
    return rst + suffix
}