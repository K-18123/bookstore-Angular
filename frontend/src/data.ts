import { Book } from "./app/shared/models/Book"
export const sample_books: Book[]=[
    {
        id: '1',
        name: "Đi vòng quanh thế giới vẫn quanh 1 người",
        price: 10,
        favorite:true,
        categories: ['vanhoc'],
        decription: "sách Đi vòng quanh thế giới vẫn quanh 1 người",
        imageUrl:"assets/divongquanhtgvanquanh1nguoi.jpg"
    },
    {
        id: '2',
        name: "Có 2 con mèo ngồi bên cửa sổ",
        price: 6,
        favorite:true,
        categories: ['vanhoc'],
        decription: "sách Có 2 con mèo ngồi bên cửa sổ",
        imageUrl:'assets/cohaiconmeongoibencuaso.jpg'
    },
    {
        id: '3',
        name: "Lạc giữa tần số không người nghe",
        price: 12,
        favorite:true,
        categories: ['tamli'],
        decription: "sách Lạc giữa tần số không người nghe",
        imageUrl:'assets/lacgiuatansokhongnguoinghe.jpg'
    },
    {
        id: '4',
        name: "Mẹ làm gì có ước mơ",
        price: 11,
        favorite:true,
        categories: ['vanhoc'],
        decription: "sách Mẹ làm gì có ước mơ",
        imageUrl:'assets/melamgicouocmo.jpg'
    },
    {
        id: '5',
        name: "Ngày đó mèo đến bên tôi",
        price: 5,
        favorite:false,
        categories: ['vanhoc'],
        decription: "sách Ngày đó mèo đến bên tôi",
        imageUrl:'assets/ngaydomeodenbentoi.jpg'
    },
    {
        id: '6',
        name: "Tấm vé tuổi thơ",
        price: 7,
        favorite:true,
        categories: ['vanhoc'],
        decription: "sách Tấm vé tuổi thơ",
        imageUrl:'assets/tamvetuoitho.jpg'
    },
    {
        id: '7',
        name: "Tôi thấy hoa vàng trên đồng cỏ xanh",
        price: 8,
        favorite:true,
        categories: ['vanhoc'],
        decription: "Sách tôi thấy hoa vàng trên đồng cỏ xanh",
        imageUrl:'assets/toithayhoavangtrendongcoxanh.jpg'
    },
]