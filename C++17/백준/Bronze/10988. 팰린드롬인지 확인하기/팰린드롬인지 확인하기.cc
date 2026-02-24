#include <bits/stdc++.h>
using namespace std;

// level , noon
string str;
string temp;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> str;
    temp = str;

    reverse(str.begin(), str.end());

    cout << (temp == str ? 1 : 0);

    return 0;
}