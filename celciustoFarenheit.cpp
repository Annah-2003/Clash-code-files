#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;


    cout << "Input the temperature in Celsius: ";
    cin >> celsius;


    fahrenheit = (celsius * 9 / 5) + 32;


    cout  << celsius << " C" << endl;
    cout << fahrenheit << " F" << endl;
    system ("pause");
    return 0;
}
