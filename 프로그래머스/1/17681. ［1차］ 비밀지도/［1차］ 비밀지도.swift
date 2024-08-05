func solution(_ n: Int, _ arr1: [Int], _ arr2: [Int]) -> [String] {
    var answer: [String] = []

    func pad(_ value: String, _ num: Int) -> String {
        if value.count == n {
            return value
        } else {
            var tmp: String = ""
            for i in 0...(num - value.count - 1) {
                tmp += "0"
            }
            tmp += value
            return tmp
        }
    }

    for i in 0..<n {
        var tmp = ""
        let bin1 = pad(String(arr1[i], radix: 2),n)
        let bin2 = pad(String(arr2[i], radix: 2),n)
        for j in 0..<n {
            let target1 = Array(bin1)[j]
            let target2 = Array(bin2)[j]

            if target1 == "1" || target2 == "1" {
                tmp += "#"
            } else {
                tmp += " "
            }
        }
        answer.append(tmp)
    }

    return answer
}