 let T = Int(readLine()!)!
    for _ in 0 ..< T {
        var rst = 0
        let tmp = readLine()!.split(separator: " ").map { Int(String($0))! }
        let (M, N, K): (Int, Int, Int) = (tmp[0], tmp[1], tmp[2])
        // M * N array
        var graph = Array(repeating: Array(repeating: 0, count: M), count: N)

        // init graph
        for _ in 0 ..< K {
            let inputs = readLine()!.split(separator: " ").map { Int(String($0))! }
            graph[inputs[1]][inputs[0]] = 1
        }

        var visited = Array(repeating: Array(repeating: false, count: M), count: N)

        for i in 0 ..< N {
            for j in 0 ..< M {
                if dfs(x: i, y: j) {
                    rst += 1
                }
            }
        }

        // create graph
        // 모든 노드에 대해 dfs 실행
        // 방문한 적 없는 노드의 경우 rst +1

        // 결과 출력
        print(rst)

        func dfs(x: Int, y: Int) -> Bool {
            // 범위값 체크
            if x < 0 || x >= N || y < 0 || y >= M {
                return false
            }

            let x_dir = [0, 0, 1, -1]
            let y_dir = [1, -1, 0, 0]

            if graph[x][y] == 1 && !visited[x][y] {
                // 방문처리
                visited[x][y] = true
                for i in 0 ..< 4 {
                    let cx = x + x_dir[i]
                    let cy = y + y_dir[i]

                    if cx >= 0 && cx < N && cy >= 0 && cy < M {
                        dfs(x: cx, y: cy)
                    }
                }
                return true
            }
            // 현재 지점 변수 지정
            return false
        }
    }