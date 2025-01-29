import Foundation

func solution(_ before:String, _ after:String) -> Int {
    var dict = [String: Int]()
    
    // init dict
    for item in Array(before) {
        if dict[String(item)] == nil {
        	dict[String(item)] = 1 
        } else {
            dict[String(item)]! += 1
        }
    }
    
    for item in Array(after) {
        if dict[String(item)] != nil {
            
          dict[String(item)]! -= 1
          
          
          if dict[String(item)]! < 0 {
              print(dict[String(item)]!)
              return 0
          }
            
        } else {
            return 0
        }
    }
    
    
    
    return 1
}