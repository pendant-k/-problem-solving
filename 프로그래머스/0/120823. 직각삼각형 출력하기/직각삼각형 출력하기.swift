import Foundation

let n = readLine()!.components(separatedBy: [" "]).map { Int($0)! }

for i in 1 ..< (n[0] + 1) {
    var tmp = ""
    for _ in 0 ..< i {
        tmp += "*"
    }
    print(tmp)
}