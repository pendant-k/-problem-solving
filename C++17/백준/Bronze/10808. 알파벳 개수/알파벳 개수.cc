#include <bits/stdc++.h>
using namespace std;

string alp = "abcdefghijklmnopqrstuvwxyz";
// size + fill value
vector<int> freq(26, 0);

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string s;
    cin >> s;

    for (char c : s)
    {
        for (int i = 0; i < 26; i++)
        {
            if (c == alp[i])
            {
                freq[i] += 1;
            }
        }
    }

    for (int cnt : freq)
    {
        cout << cnt << " ";
    }
    return 0;
}