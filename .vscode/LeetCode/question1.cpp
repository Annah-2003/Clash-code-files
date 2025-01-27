#include <iostream>
using namespace std;
int main()
{
   int arr[10];
    cout<< "Enter 10 numbers" << endl;
    for (int i =0; i < 10; i++)
    {
    cin >> arr[1];
    }

    cout << "\nArray in ascending order of index:";
    for (int i = 0; i<10 ; i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    cout<< "Array in descending order of index";
    for (int i = 9; i >= 0; i--){
        cout << arr[i] << "";
    }
    cout << endl;

    int sum = 0;
    for (int i =0; i<10; i++){
        cout << "\n The sum of the array elemnts is :"<<sum << endl;
    }
    return 0;
}