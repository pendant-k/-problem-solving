func solution(_ arr:[Int], _ divisor:Int) -> [Int] {
    var tmp = arr.filter { $0 % divisor == 0 }.sorted()
    return tmp.isEmpty ? [-1] : tmp
}