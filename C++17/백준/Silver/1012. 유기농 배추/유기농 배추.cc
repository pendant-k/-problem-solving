#include <bits/stdc++.h>
using namespace std;

// Test case 개수
int T;

// 임시로 조회한 좌표 q에서 꺼내서 계산용 변수
int cy, cx;

// 방향
int dy[4] = {1, -1, 0, 0};
int dx[4] = {0, 0, 1, -1};

// bfs - 좌표 저장을 위한 queue
queue<pair<int, int>> q;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    // 테스트 개수
    cin >> T;
    for (int i = 0; i < T; i++)
    {
        // 결과
        int ret = 0;

        // bfs용 배열들
        int visited[54][54] = {0};
        int mp[54][54] = {0};
        int M, N, K;

        // -- 테스트 케이스 초기화 --

        // m,n,k값 가져오기
        cin >> M >> N >> K;
        // 배추 심기
        for (int i = 0; i < K; i++)
        {
            int x, y;
            cin >> x >> y;
            mp[y][x]++;
        }

        // 체크
        for (int y = 0; y < N; y++)
        {
            for (int x = 0; x < M; x++)
            {
                if (mp[y][x] == 1 && visited[y][x] == 0)
                {
                    q.push({y, x});
                    while (!q.empty())
                    {
                        tie(cy, cx) = q.front();
                        q.pop();
                        for (int i = 0; i < 4; i++)
                        {
                            int ny = cy + dy[i];
                            int nx = cx + dx[i];

                            if (ny >= 0 && ny < N && nx >= 0 && nx < M)
                            {
                                if (visited[ny][nx] == 0 && mp[ny][nx] == 1)
                                {

                                    q.push({ny, nx});
                                    visited[ny][nx]++;
                                }
                            }
                        }
                    }
                    ret++;
                }
            }
        }

        // output : TC 결과
        cout << ret << "\n";
    }

    return 0;
}