func solution(_ strings:[String], _ n:Int) -> [String] {
    return strings.sorted().sorted { return Array($0)[n] < Array($1)[n] }
}