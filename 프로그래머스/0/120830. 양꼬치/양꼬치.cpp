#include <string>
#include <vector>

using namespace std;

int solution(int n, int k) {
    int total = (12000 * n) + 2000 * k - (int)(n / 10) * 2000;
    return total;
}