#include <iostream>
#include <string>

using namespace std;

int main() {
    int w, h;
    cin >> w >> h; cin.ignore();
    int n;
    cin >> n; cin.ignore();
    int x0, y0;
    cin >> x0 >> y0; cin.ignore();

    int xmin = 0, ymin = 0;
    int xmax = w - 1, ymax = h - 1;

    while (1) {
        string bomb_dir;
        cin >> bomb_dir; cin.ignore();

        // Adjust the search area based on bomb_dir
        if (bomb_dir.find('U') != string::npos) {
            ymax = y0 - 1;
        }
        if (bomb_dir.find('D') != string::npos) {
            ymin = y0 + 1;
        }
        if (bomb_dir.find('L') != string::npos) {
            xmax = x0 - 1;
        }
        if (bomb_dir.find('R') != string::npos) {
            xmin = x0 + 1;
        }

        // Calculate new position
        x0 = (xmin + xmax) / 2;
        y0 = (ymin + ymax) / 2;

        // Output the next position to jump to
        cout << x0 << " " << y0 << endl;
    }
}
