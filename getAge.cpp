#include <iostream>
#include <string>

using namespace std;

int main () {
    int n;
    cin >> n;
    cin.ignore();


for (int i = 0; i < n; i++)
{
    int age;
    cin >> age;
    cin.ignore();

    if (age < 19) {
            cout << "Too young" << endl;
        } else if (age > 25) {
            cout << "Too old" << endl;
        } else {
            int years_left = 25 - age;
            cout << "Just perfect for Leonardo DiCaprisun, " << years_left << " years left until 25" << endl;
        }
}   system ("pause");
    return 0;


}