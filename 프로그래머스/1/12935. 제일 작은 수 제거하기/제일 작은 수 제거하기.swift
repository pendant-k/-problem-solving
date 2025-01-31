func solution(_ arr:[Int]) -> [Int] {
    var mm = arr[0]
    
    for i in arr {
        if i <= mm {
            mm = i
        }
    }
    var tmp = arr.filter {$0 > mm}
    
    return tmp.isEmpty ? [-1] : tmp
}