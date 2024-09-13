import React, { useEffect } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Chart from 'react-apexcharts'
import customer from '../../assets/seller.png'
import { useSelector, useDispatch } from 'react-redux'
import { get_seller_dashboard_index_data } from '../../store/Reducers/dashboardIndexReducer'
import moment from 'moment'
const SellerDashboard = () => {

    const {userInfo} = useSelector(state=>state.auth)
    const { totalSale,
        totalOrder,
        totalProduct,
        totalPendingOrder,
        totalSeller,
        recentOrders,
        recentMessage } = useSelector(state => state.dashboardIndex)

    const state = {
        series: [
            {
                name: "Orders",
                data: [34, 65, 34, 65, 34, 34, 34, 56, 23, 67, 23, 45]
            },
            {
                name: "Revenue",
                data: [34, 32, 45, 32, 34, 34, 43, 56, 65, 67, 45, 78]
            },
            {
                name: "Seles",
                data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43]
            }
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
            },
            legend: {
                position: 'top'
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        }
                    }
                }
            ]
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_seller_dashboard_index_data())
    }, [])
    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>${totalSale}</h2>
                        <span className='text-md font-medium'>Tổng doanh thu</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>{totalProduct}</h2>
                        <span className='text-md font-medium'>Các sản phẩm</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
                        <RiProductHuntLine className='text-[#cd00e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>{totalOrder}</h2>
                        <span className='text-md font-medium'>Đơn đặt hàng</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <AiOutlineShoppingCart className='text-[#00cfe8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>{totalPendingOrder}</h2>
                        <span className='text-md font-medium'>Lệnh chờ xử lý</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg' />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#283046] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type='bar' height={350} />
                    </div>
                </div>
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
                    <div className='w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Tin nhắn gần đây của khách hàng</h2>
                            <Link className='font-semibold text-sm text-[#d0d2d6]'>Xem tất cả</Link>
                        </div>
                        <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
                            <ol className='relative border-1 border-slate-600 ml-4'>
                                {
                                    recentMessage.map((m, i) => <li className='mb-3 ml-6'>
                                        <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10'>
                                            {
                                            m.senderId === userInfo._id ?  <img className='w-full rounded-full h-full shadow-lg' src={userInfo.image} alt="" /> :  <img className='w-full rounded-full h-full shadow-lg' src={customer} alt="" />
                                            }
                                        </div>
                                        <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                            <div className='flex justify-between items-center mb-2'>
                                                <Link className='text-md font-normal'>{m.senderName}</Link>
                                                <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>{moment(m.createdAt).startOf('hour').fromNow()}</time>
                                            </div>
                                            <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            {m.message}
                                            </div>
                                        </div>
                                    </li>)
                                }


                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full p-4  bg-[#283046] rounded-md mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Đơn đặt hàng gần đây</h2>
                    <Link to='/seller/dashboard/orders' className='font-semibold text-sm text-[#d0d2d6]'>Xem tất cả</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Id đơn hàng</th>
                                <th scope='col' className='py-3 px-4'>Giá</th>
                                <th scope='col' className='py-3 px-4'>Trạng thái thanh toán</th>
                                <th scope='col' className='py-3 px-4'>Trạng thái đơn hàng</th>
                                <th scope='col' className='py-3 px-4'>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentOrders.map((d, i) => <tr key={i}>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#{d._id}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>${d.price}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{d.delivery_status}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{d.payment_status}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <Link to={`/seller/dashboard/order/details/${d._id}`}>view</Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SellerDashboard