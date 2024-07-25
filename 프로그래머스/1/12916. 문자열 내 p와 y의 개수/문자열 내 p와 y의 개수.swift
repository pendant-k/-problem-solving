import Foundation

func solution(_ s:String) -> Bool
{
    var ans:Bool = false
    
    let target = s.lowercased()
    print(target)
    if target.filter{ $0 == "p" }.count == target.filter { $0 == "y" }.count {
        ans = true
    }

    return ans
}