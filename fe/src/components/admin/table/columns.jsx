
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
    { 
        field: 'Don_Gia', 
        headerName: 'Đơn giá (đ)', 
        width: 130, 
        type: 'number',
        valueGetter: (params) =>
        `${params.row.Don_Gia}`

    },
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
    { 
        field: 'Ho_KH', 
        headerName: 'Họ và tên', 
        width: 300,
        valueGetter: (params) =>
        `${params.row.Ho_KH || ''} ${params.row.Ten_KH || ''}`,
    },
    { field: 'Gioi_Tinh', headerName: 'Giới tính', width: 130},
    { field: 'SDT', headerName: 'SĐT', width: 170, type: 'number'},
    { field: 'Tai_Khoan', headerName: 'Gmail', width: 260},
    { 
        field: 'Ngay_Tao', 
        headerName: 'Ngày tạo', 
        width: 153, 
        type: 'number',
        renderCell: (params) => {
            const date_create = new Date(params.row.Ngay_Tao);
            const date = date_create.getDate();
            const month = date_create.getMonth() + 1;
            const year = date_create.getFullYear();
            return(
                <div>{`${date}/${month}/${year}`}</div>
            )
        },
    },
  ];

//employee columns
export const employeeColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { 
        field: 'Ho_NV', 
        headerName: 'Họ và tên', 
        width: 280,
        valueGetter: (params) =>
        `${params.row.Ho_NV || ''} ${params.row.Ten_NV || ''}`,
    },
    { field: 'Gioi_Tinh', headerName: 'Giới tính', width: 100},
    { field: 'SDT', headerName: 'SĐT', width: 130, type: 'number'},
    { field: 'Tai_Khoan', headerName: 'Gmail', width: 260},
    { 
        field: 'Quyen', 
        headerName: 'Chức vụ', 
        width: 120,
        valueGetter: (params) =>
        `${params.row.Quyen.Ten_Quyen}` 
    },
    { field: 'created_at', headerName: 'Ngày tạo', width: 123, type: 'number'},
]

//order columns
export const orderColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { 
        field: 'Ma_KH', 
        headerName: 'Tên KH', 
        width: 200,
        valueGetter: (params) =>
        `${params.row.Ma_KH.Ho_KH} ${params.row.Ma_KH.Ten_KH}` 
    },
    { field: 'Dia_Chi', headerName: 'Địa chỉ', width: 360},
    { field: 'Thanh_Tien', headerName: 'Tổng tiền', width: 140, type: 'number',
        valueGetter: (params) =>
        `${(params.row.Thanh_Tien).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }` },
    { 
        field: 'created_at', 
        headerName: 'Ngày tạo', 
        width: 120,
        renderCell: (params) => {
            const date_create = new Date(params.row.Ngay_Tao);
            const date = date_create.getDate();
            const month = date_create.getMonth() + 1;
            const year = date_create.getFullYear();
            return(
                <div>{`${date}/${month}/${year}`}</div>
            )
        },
    },
]

// news columns
export const newsColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'Tieu_De', headerName: 'Tiêu đề', width: 430},
    { field: 'Loai_Tin_Tuc', headerName: 'Loại', width: 170},
    { 
        field: 'Noi_Dung', 
        headerName: 'Nội dung', 
        width: 200,
        renderCell: (params) =>
        <div dangerouslySetInnerHTML={{__html: params.row.Noi_Dung}}></div>
    },
    { 
        field: 'Ngay_Dang', 
        headerName: 'Ngày đăng', 
        width: 170, 
        type: 'number',
        renderCell: (params) => {
            const date_create = new Date(params.row.Ngay_Dang);
            const date = date_create.getDate();
            const month = date_create.getMonth() + 1;
            const year = date_create.getFullYear();
            return(
                <div>{`${date}/${month}/${year}`}</div>
            )
        },
    },
]

// feedback columns
export const feedbackColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { 
        field: 'Ma_KH', 
        headerName: 'Tên người phản hồi', 
        width: 250,
        valueGetter: (params) =>
        `${params.row.Ma_KH.Ho_KH} ${params.row.Ma_KH.Ten_KH}`
    },
    { field: 'Email', headerName: 'Email', width: 250},
    { field: 'Noi_Dung', headerName: 'Nội dung', width: 400},
    { field: 'created_at', headerName: 'Ngày phản hồi', width: 150, type: 'number',renderCell: (params) => {
        const date_create = new Date(params.row.created_at);
        const date = date_create.getDate();
        const month = date_create.getMonth() + 1;
        const year = date_create.getFullYear();
        return(
            <div>{`${date}/${month}/${year}`}</div>
        )
    },}
]