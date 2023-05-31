#include<iostream>
#include<string>
using namespace std;

int main(){
	string a;
	cout<<"Nhap mot cau: ";
	getline(cin, a);
	
	int soTu = 0;
	int soKytu = 0;
	bool soTuu = false;
	
	for (char c : a){
		//vòng lặp for-each cho phép lặp qua từng phần tử của dãy giá trị như một chuỗi, một mảng, một dãy
		//Ví dụ nếu có char c: a và a là Hello thì khi cho vào for và in c cùng ' ', sẽ in ra từng chữ H e l l o
		if (c == ' ' || c == '\t' || c == '\n' ){
			soTuu = false;
			//Khi so Tuu = false => gặp ký tự là khoảng trắng
		}
		else{
			if (!soTuu){
				soTuu = true;
				soTu++;
			//Khi soTuu không phải false => +1 từ và true sẽ là bắt đầu cho một từ mới
		}
			soKytu++;
	}
	}

    cout <<"So tu: "<< soTu << endl;
    cout <<"So ky tu: "<< soKytu << endl;

    return 0;
}
