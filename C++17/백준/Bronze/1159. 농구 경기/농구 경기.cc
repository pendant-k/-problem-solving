#include <bits/stdc++.h>
using namespace std;

int n;
int cnt[26] = {0};
string ret;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n;

    for (int i = 0; i < n; i++)
    {
        string s;
        cin >> s;
        cnt[s[0] - 'a']++;
    }

    for (int i = 0; i < 26; i++)
    {
        if (cnt[i] >= 5)
        {
            ret += (char)(i + 'a');
        }
    }

    cout << (ret.empty() ? "PREDAJA" : ret);

    return 0;
}