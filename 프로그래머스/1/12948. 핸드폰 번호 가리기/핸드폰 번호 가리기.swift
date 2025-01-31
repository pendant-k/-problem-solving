func solution(_ phone_number:String) -> String {
    var rst = ""
    var arr = Array(phone_number)
    let tmp = arr[phone_number.count - 4 ..< phone_number.count]
    
    if arr.count == 4 {
        return phone_number
    }
    
    for i in 0 ..< (phone_number.count - 4) {
        rst += "*"
    }
    
    for i in tmp {
        rst += String(i)
    }
    
    return rst
}