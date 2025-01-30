func solution(_ a:Int, _ b:Int) -> Int64 {
    if b >= a {
    	return Int64((a ... b).reduce(0, +))
    } else {
        return Int64((b ... a ).reduce(0, +))
    }
}