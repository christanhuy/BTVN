#include <iostream>
using namespace std;

class SinhVien{
    public:
    	int id;
        float diemMon1, diemMon2, diemTheChat;
        void nhapThongTin(){
            cout<<"Nhap ID cua sinh vien: ";
            cin>>id;
            cout<<"Nhap diem mon 1: ";
            cin>>diemMon1;
            cout<<"Nhap diem mon 2: ";
            cin>>diemMon2;
            cout<<"Nhap diem the chat: ";
            cin>>diemTheChat;
        }
        
        void hienThiThongTin(){
            cout<<"ID: "<<id<<endl;
            cout<<"Diem mon 1: "<<diemMon1<<endl;
            cout<<"Diem mon 2: "<<diemMon2<<endl;
            cout<<"Diem the chat: "<<diemTheChat<<endl;
        }
};

class SinhVienTinhDiem:public SinhVien{
    public:
        float tinhTongDiem(){
            return diemMon1+diemMon2+diemTheChat;
        }
        
        float tinhDiemTrungBinh(){
            return tinhTongDiem()/3;
        }
};

int main(){
    SinhVienTinhDiem sv;
    sv.nhapThongTin();
    cout<<endl<<"Thong tin sinh vien:"<<endl;
    sv.hienThiThongTin();
    cout<<endl<<"Tong diem: "<<sv.tinhTongDiem()<<endl;
    cout<<"Diem trung binh: "<<sv.tinhDiemTrungBinh()<<endl;
}