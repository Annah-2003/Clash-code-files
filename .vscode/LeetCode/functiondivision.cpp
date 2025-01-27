#include <iostream>
using namespace std;

int division(int a, int b) {
    return b != 0 ? a / b : 0;  // Check for division by zero
}

int main() {
    int num1, num2;
    cin >> num1 >> num2;
    cout << division(num1, num2) << endl;
    return 0;
}
