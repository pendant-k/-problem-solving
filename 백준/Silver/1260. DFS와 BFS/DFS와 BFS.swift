import Foundation

func sol_1260() {
    let inputs = readLine()!.split(separator: " ").map { Int(String($0))! }
    // 정점 개수
    let N = inputs[0]
    // 간선 개수
    let M = inputs[1]
    // 시작 정점
    let V = inputs[2]

    // printing string
    var rst = ""
    // N+1 => index 1부터 체크
    var graph: [[Int]] = Array(repeating: [], count: N + 1)
    // 방문여부 체크
    var visited = Array(repeating: false, count: N + 1)
    // create graph
    for _ in 0 ..< M {
        let tmp = readLine()!.split(separator: " ").map { Int(String($0))! }
        let a = tmp[0]
        let b = tmp[1]

        graph[a].append(b)
        graph[b].append(a)
    }

    for i in 0 ..< N + 1 {
        graph[i].sort()
    }

    // implement dfs and bfs

    // v -> 시작 지점
    func dfs(_ v: Int) {
        // 방문 처리
        visited[v] = true
        rst += "\(v) "

        for i in graph[v] {
            if !visited[i] {
                // 방문하지 않은 정점이 있다면 먼저 방문
                dfs(i)
            }
        }
    }

    // v -> 시작 지점
    func bfs(_ v: Int) {
        var needVisited: [Int] = [v]
        var visited = Set<Int>()

        while !needVisited.isEmpty {
            let currentNode = needVisited.removeFirst()
            if !visited.contains(currentNode) {
                visited.insert(currentNode)
                rst += "\(currentNode) "
                needVisited.append(contentsOf: graph[currentNode])
            }
        }
    }

    // Run :
    dfs(V)
    print(rst)

    rst = ""
    bfs(V)
    print(rst)
}

sol_1260()
