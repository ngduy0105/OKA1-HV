CREATE DATABASE HotelVoucher
GO
USE HotelVoucher
GO
CREATE TABLE Voucher(
MaVoucher int IDENTITY(1,1) NOT NULL,
TenVoucher nvarchar(50),
MoTa nvarchar(255),
MaPL int,
CONSTRAINT PK_Voucher Primary Key(MaVoucher)
) 
CREATE TABLE PhanLoai(
MaPL int NOT NULL,
TenPL nvarchar(50) ,
CONSTRAINT PK_PhanLoai Primary Key(MaPL)
)
ALTER TABLE Voucher
Add CONSTRAINT FK_Voucher foreign key(MaPL) references PhanLoai(MaPL)
