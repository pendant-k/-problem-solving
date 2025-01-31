import Foundation

func solution(_ genres:[String], _ plays:[Int]) -> [Int] {
    // genres : [id:plays]
    var dict = [String:[Int:Int]]()
    // return value
    var rst = [Int]()
    
    // save total value
    var totals = [String:Int]()
    
    // i -> index
    // set dict
    for i in 0..<genres.count {
    	let genre = genres[i]    
        if dict[genre] == nil {
            dict[genre] = [Int:Int]()
            dict[genre]![i] = plays[i]
        } else {
            dict[genre]![i] = plays[i]
        }
        // set totals
        if totals[genre] == nil {
            totals[genre] = plays[i]
        } else {
            totals[genre]! += plays[i]
        }
    }
    
    // 값이 큰 순서대로 key 가져오기
    for (k,_) in totals.sorted { $0.value > $1.value } {
   		let tmp = dict[k]!.sorted { $0.key < $1.key }.sorted { $0.value > $1.value }
        print(tmp)
        if tmp.count < 2 {
            rst.append(tmp[0].key)
        } else {
            rst.append(tmp[0].key)
            rst.append(tmp[1].key)
        }
    }
    
    return rst
}