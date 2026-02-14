#include <iostream>
using namespace std;

double executeTrade(double price, double qty) {
    return price * qty;
}

int main() {
    cout << executeTrade(45000, 1.2);
}
