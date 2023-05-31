#include <iostream>

using namespace std;

int main() {
    int number, reverseNumber;
    cout << "Nhap so nguyen: ";
    cin >> number;
    
	reverseNumber = 0;
    while(number!=0){
    	reverseNumber = reverseNumber*10 + number%10;
    	//Lấy số cuối của số đã nhập bằng cách sử dụng %
    	//Khi đó số cuối sẽ trở thành số đầu tiên của số đảo ngược
    	number/=10;
    	//Để loại đi số cuối vừa lấy ra và cứ thế lặp lại đến khi không còn số nào
	}
    cout<<"So dao nguoc: "<<reverseNumber<<endl;
}