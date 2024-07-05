#include <iostream>
#include <vector>

using namespace std;

int main() {
    int surface_n;
    cin >> surface_n; cin.ignore();
    for (int i = 0; i < surface_n; i++) {
        int land_x, land_y;
        cin >> land_x >> land_y; cin.ignore();
    }

    while (1) {
        int x, y, h_speed, v_speed, fuel, rotate, power;
        cin >> x >> y >> h_speed >> v_speed >> fuel >> rotate >> power; cin.ignore();

        int target_power = 0;
        if (v_speed <= -40) {
            target_power = 4; // Full thrust to reduce speed
        } else if (v_speed < -10) {
            target_power = 3; // Medium thrust to control descent
        } else if (v_speed < 0) {
            target_power = 2; // Small thrust to slow descent
        } else {
            target_power = 1; // Minimal thrust to maintain or slow ascent
        }

        cout << "0 " << target_power << endl;
    }
}
