func solution(_ x:Int, _ n:Int) -> [Int64] {
    var rst = [Int64]()
    
    for i in 1 ... n {
        rst.append(Int64(x * i))
    }
    
    return rst
}