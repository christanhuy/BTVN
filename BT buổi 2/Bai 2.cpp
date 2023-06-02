#include<iostream>
using namespace std;

void hinhTron(){
	double x;
	cout<<"Ban kinh hinh tron: ";
	cin>>x;
    double dtht = 3.14*x*x;
    cout<<"Dien tich hinh tron la: "<<dtht<<endl;
}

void hinhChunhat(){
	double a,b;
	cout<<"Chieu dai hinh chu nhat: ";
	cin>>a;
	cout<<"Chieu rong hinh chu nhat: ";
	cin>>b;
    double dthcn = a*b;
    cout<<"Dien tich hinh chu nhat la: "<<dthcn<<endl;
}

void hinhTamgiac(){
	double c,d;
	cout<<"Canh day hinh tam giac: ";
	cin>>c;
	cout<<"Chieu cao hinh tam giac: ";
	cin>>d;
    double dttg = c*d*0.5;
    cout<<"Dien tich hinh tam giac la: "<<dttg;
}

int main(){
    hinhTron();
    hinhChunhat();
    hinhTamgiac();
}