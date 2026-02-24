#include <bits/stdc++.h>
using namespace std;

// 상하좌우 이동을 위한 값
int n, m;
int dy[4] = {1, -1, 0, 0};
int dx[4] = {0, 0, 1, -1};
// 여유 공간 두기
int mp[104][104];
int visited[104][104];
int cy, cx;

queue<pair<int, int>> q;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    // 미로 사이즈 값 받기
    cin >> n >> m;

    // 미로 맵 초기화
    for (int i = 0; i < n; i++)
    {
        string s;
        cin >> s;
        for (int j = 0; j < m; j++)
        {
            mp[i][j] = s[j] - '0';
        }
    }

    q.push({0, 0});
    visited[0][0] = 1;

    // 미로 탐색
    while (!q.empty())
    {
        tie(cy, cx) = q.front();
        q.pop();

        for (int i = 0; i < 4; i++)
        {
            int ny = cy + dy[i];
            int nx = cx + dx[i];

            if (ny >= 0 && ny < n && nx >= 0 && nx < m)
            {
                if (mp[ny][nx] == 1 && visited[ny][nx] == 0)
                {
                    visited[ny][nx] = visited[cy][cx] + 1;
                    q.push({ny, nx});
                }
            }

            // check range
        }
    }
    cout << visited[n - 1][m - 1];

    return 0;
}