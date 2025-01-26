import Foundation

func solution(_ price:Int) -> Int {
    var rst = Double(price)
    var sale = 0.0
    
    
    // over 100_000
    if price >= 100_000 {
        sale = rst * 0.05
    }
    
    // over 300_000
    if price >= 300_000 {
        sale = rst * 0.1
    } 
    
    // over 500_000
    if price >= 500_000 {
        sale = rst * 0.2
    } 
    
    return Int(rst - sale)
}