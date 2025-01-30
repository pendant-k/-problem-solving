func solution(_ n:Int64) -> [Int] {
    var rst = [Int]()
    
    var tmp = Array(String(n))
    
    while tmp.count > 0 {
        rst.append(Int(String(tmp.popLast()!))!)
    }
    
    return rst
}