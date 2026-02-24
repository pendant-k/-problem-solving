#include <bits/stdc++.h>
using namespace std;

int timetable[101] = {0};
int ret = 0;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int a, b, c;
    cin >> a >> b >> c;

    // 타임테이블 채우기
    for (int i = 0; i < 3; i++)
    {
        int start, end;
        cin >> start >> end;
        for (int i = start; i < end; i++)
        {
            timetable[i]++;
        }
    }

    for (int i = 0; i < 101; i++)
    {
        int cur = timetable[i];
        if (cur == 0)
            continue;

        if (cur == 1)
        {
            timetable[i] *= a;
        }
        else if (cur == 2)
        {
            timetable[i] *= b;
        }
        else
        {
            timetable[i] *= c;
        }
    }

    cout << accumulate(timetable, timetable + 101, 0);

    return 0;
}