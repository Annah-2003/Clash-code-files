#include <iostream>
using namespace std;

int main() {
    int currentYear, yearOfBirth, age;  // Declare variables

    // Get user input for currentYear and yearOfBirth
    cout << "Enter the current year: ";
    cin >> currentYear;

    cout << "Enter your year of birth: ";
    cin >> yearOfBirth;

    // Calculate age
    age = currentYear - yearOfBirth;  // Remove redeclaration of 'age'

    // Output the age
    cout << "Your age is: " << age << endl;

    system("pause");  // Optional: pauses the console so it doesn't close immediately
    return 0;
}
