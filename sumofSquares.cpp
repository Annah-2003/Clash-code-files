#include <iostream>
#include <vector>

using namespace std;

int main () {
    int n;
    cin >> n;
    vector <int> numbers(n);

    for (int i = 0; i< n; i++){
        cin >> numbers[i]; //reads each integer
    }

    int sum_of_squares = 0;
    for (int i = 0; i<n; i++){
        sum_of_squares += numbers[i] * numbers[i]; //Calculates sum of squares

    }
    cout << sum_of_squares << endl; //Prints the result.
    return 0;
}
