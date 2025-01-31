func solution(_ n:Int) -> String {
    let pattern : [String] = ["수","박"]
    var rst = ""
    
    for i in 0 ..< n {
        rst += pattern[i % 2]
    }
    
    
    return rst
}