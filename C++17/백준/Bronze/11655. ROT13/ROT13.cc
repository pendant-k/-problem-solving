#include <bits/stdc++.h>
using namespace std;

string s;

char solve(char c)
{
    if (c >= 'A' && c <= 'Z')
    {
        return (c - 'A' + 13) % 26 + 'A';
    }

    if (c >= 'a' && c <= 'z')
    {
        return (c - 'a' + 13) % 26 + 'a';
    }
    return c;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    getline(cin, s);

    // 문자열 각 요소 접근 후 연산
    for (int i = 0; i < s.size(); i++)
    {
        cout << solve(s[i]);
    }

    return 0;
}
