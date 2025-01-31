func solution(_ s:String) -> String {
    let middle = Int(s.count / 2)
    var rst = ""
    // even
    if s.count % 2 == 0 {
    	rst += String(Array(s)[middle - 1 ... middle])
    // odd
    } else {
        rst += String(Array(s)[middle])
    }
    
    return rst
}