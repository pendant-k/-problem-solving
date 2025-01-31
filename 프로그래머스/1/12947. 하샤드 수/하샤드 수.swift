func solution(_ x:Int) -> Bool {
    var tmp = 0
    for c in String(x) {
        tmp += Int(String(c))!
    }
    
     return x % tmp == 0 ? true : false
}