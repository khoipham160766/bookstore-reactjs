// book columns
export const bookColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Ten_SP', headerName: 'Tên sách', width: 330},
    { 
        field: 'Danh_Muc', 
        headerName: 'Loại', 
        width: 200,
        valueGetter: (params) =>
        `${params.row.Danh_Muc.Ten_DM}`
    },
    { field: 'Don_Gia', headerName: 'Đơn giá', width: 130, type: 'number'},
    { field: 'Giam_Gia', headerName: 'Giảm giá', width: 100, type: 'number'},
    { field: 'So_Luong', headerName: 'Số lượng', width: 100, type: 'number'},
    { field: 'NXB', headerName: 'NXB', width: 153},
   
]

// category columns
export const categoryColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Ten_DM', headerName: 'Tên danh mục', width: 810},
    { field: 'Tong_San_Pham', headerName: 'Số lượng sản phẩm', width: 270, type: 'number'},
];

// customer columns
export const customerColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Ho_KH', headerName: 'Họ và tên lót', width: 170},
    { field: 'Ten_KH', headerName: 'Tên', width: 130},
    { field: 'Gioi_Tinh', headerName: 'Giới tính', width: 130},
    { field: 'SDT', headerName: 'SĐT', width: 170, type: 'number'},
    { field: 'Tai_Khoan', headerName: 'Gmail', width: 260},
    { field: 'created_at', headerName: 'Ngày tạo', width: 153, type: 'number'},
  ];

//employee columns
export const employeeColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Ho_NV', headerName: 'Họ và tên lót', width: 150},
    { field: 'Ten_NV', headerName: 'Tên', width: 130},
    { field: 'Gioi_Tinh', headerName: 'Giới tính', width: 100},
    { field: 'SDT', headerName: 'SĐT', width: 130, type: 'number'},
    { field: 'Tai_Khoan', headerName: 'Gmail', width: 260},
    { field: 'Quyen', headerName: 'Chức vụ', width: 120 },
    { field: 'created_at', headerName: 'Ngày tạo', width: 123, type: 'number'},
]

//order columns
export const orderColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Ma_KH', headerName: 'Mã KH', width: 130},
    { field: 'Dia_Chi', headerName: 'Địa chỉ', width: 400},
    { field: 'Trang_Thai', headerName: 'Trạng thái', width:130},
    { field: 'Thanh_Tien', headerName: 'Tổng tiền', width: 140, type: 'number'},
    { field: 'created_at', headerName: 'Ngày tạo', width: 120},
]

// news columns
export const newsColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Tieu_De', headerName: 'Tiêu đề', width: 430},
    { field: 'Loai_Tin_Tuc', headerName: 'Loại', width: 170},
    { 
        field: 'Danh_Muc', 
        headerName: 'Danh_Muc', 
        width: 200,
        valueGetter: (params) =>
        `${params.row.Danh_Muc.Ten_DM}`
    },
    { field: 'Ngay_Dang', headerName: 'Ngày đăng', width: 170, type: 'number'},
]
