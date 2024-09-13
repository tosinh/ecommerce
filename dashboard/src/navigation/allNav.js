import { AiFillDashboard, AiOutlineShoppingCart, AiOutlinePlus } from 'react-icons/ai'
import { BiCategory, BiLoaderCircle } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { CiChat1 } from 'react-icons/ci'
import { BsCurrencyDollar, BsChat } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
export const allNav = [
    {
        id: 1,
        title: 'Trang tổng quan',
        icon: <AiFillDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Đơn đặt hàng',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Danh mục',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Người bán',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Yêu cầu thanh toán',
        icon: <BsCurrencyDollar />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Người bán không hoạt động',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 7,
        title: 'Yêu cầu của người bán',
        icon: <BiLoaderCircle />,
        role: 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id: 8,
        title: 'Trò chuyện với người bán',
        icon: <CiChat1 />,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },
    {
        id: 9,
        title: 'Trang tổng quan',
        icon: <AiFillDashboard />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 10,
        title: 'Thêm sản phẩm',
        icon: <AiOutlinePlus />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 11,
        title: 'Tất cả sản phẩm',
        icon: <RiProductHuntLine />,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 11,
        title: 'Tất cả Banner',
        icon: <RiProductHuntLine />,
        role: 'seller',
        path: '/seller/dashboard/banners'
    },

    {
        id: 12,
        title: 'Sản phẩm giảm giá',
        icon: <RiProductHuntLine />,
        role: 'seller',
        path: '/seller/dashboard/discount-products'
    },
    {
        id: 13,
        title: 'Đơn đặt hàng',
        icon: <AiOutlineShoppingCart />,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14,
        title: 'Thanh toán',
        icon: <BsCurrencyDollar />,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15,
        title: 'Trò chuyện với khách hàng',
        icon: <BsChat />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id: 16,
        title: 'Hỗ trợ trò chuyện',
        icon: <CiChat1 />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 17,
        title: 'Hồ sơ',
        icon: <FiUsers />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },
]