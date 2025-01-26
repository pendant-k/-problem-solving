import Foundation

func solution(_ angle:Int) -> Int {
    if angle == 90 {
        return 2
    }
    
    if angle == 180 {
        return 4
    }
    
    if angle > 90 {
        return 3
    }
    
    return 1
}