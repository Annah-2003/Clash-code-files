#include <iostream>
using namespace std;

int main() {
    // Declare variables
    int num1, num2, sum;

    // Prompt user for input
    cout << "Enter the first integer: ";
    cin >> num1;  // Get the first integer

    cout << "Enter the second integer: ";
    cin >> num2;  // Get the second integer

    // Calculate the sum
    sum = num1 + num2;

    // Output the result
    cout << "The sum of " << num1 << " and " << num2 << " is: " << sum << endl;

    return 0;
}
