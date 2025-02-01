func solution(_ s:String) -> Bool {
    if s.count != 4 {
        if s.count != 6 {
            return false
        }
    }
    
    let tmp = s.filter { "0123456789".contains($0) }
    
    
    return tmp.count == s.count
}