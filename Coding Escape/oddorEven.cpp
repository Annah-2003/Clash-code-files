#include <iostream>
using namespace std;

bool isEven(int num){
    return (num % 2==0);
}

int num (){
    int number;

    cout << "Enter a number:";
    cin >> number;

    if (isEven(number)){
        cout << number << "is even"<< endl;
}
        else {
            cout << number << "is odd"<< endl;
        }

        return 0;
    
}