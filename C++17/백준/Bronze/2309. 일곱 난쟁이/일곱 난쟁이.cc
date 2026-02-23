// 일곱난쟁이
#include <bits/stdc++.h>
using namespace std;

vector<int> dwarfs(9);

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    for (int i = 0; i < 9; i++)
    {
        cin >> dwarfs[i];
    }

    sort(dwarfs.begin(), dwarfs.end());
    int total_sum = accumulate(dwarfs.begin(), dwarfs.end(), 0);

    // 총합에서 이중 포인터로 값 빼면서 조합 찾기
    for (int i = 0; i < 9; i++)
    {
        for (int j = i + 1; j < 9; j++)
        {
            int current_sum = total_sum - (dwarfs[i] + dwarfs[j]);
            if (current_sum == 100)
            {

                // 정답 발견
                for (int z = 0; z < 9; z++)
                {
                    if (z != i && z != j)
                    {
                        cout << dwarfs[z] << "\n";
                    }
                }
                return 0;
            }
        }
    }

    return 0;
}