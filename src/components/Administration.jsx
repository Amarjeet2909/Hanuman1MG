import React, { useState } from 'react'
import './hrManagement/Employees.css'
import { IoEye } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { Delete, callCompleted, callDeclined, CallDisptached, callRequest } from '../assets';
import NavbarCards from './layout/NavbarCards';
import DownloadButton from './commonComponents/DownloadButton';
import { Link } from 'react-router-dom';
import NormalPagination from './commonComponents/NormalPagination';
const Administration = () => {
    const [administration, setadministration] = useState([
        {
            sno: 1, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 2, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 3, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 4, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 5, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 6, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 7, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 8, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 9, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 10, vehicalno: "BH05DS2145", registration: 'IN/123456', rc: 'View', insurance: '16-02-2027', puc: '10-11-2024', tax: 'Paid', fitness: '12-2033', icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },

    ])
    const [cards, setcards] = useState([
        {

            icon: callRequest,
            title: "Total Employees",
            value: 0,
            share: 9.5,
        },
        {
            icon: CallDisptached,
            title: "Total Vehicles",
            value: 0,
            share: 9.5,
        },
        {
            icon: callCompleted,
            title: "Total on Drivers",
            value: 0,
            share: 9.5,
        },
        {
            icon: callDeclined,
            title: "Total Standby",
            value: 0,
            share: 9.5,
        }

    ])
    return (
        <>
            <div className="d-flex justify-content-between pb-3" style={{gap:"50px"}}>
                {
                    cards.map((item) => {
                        return (
                        <div className="w-100">
                            <NavbarCards item={item} />
                        </div>)
                    })
                }
            </div>
            <div className='common-border w-100 h-100 py-3 px-4 '>

                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex  gap-4'>
                        <h2 className='employee-list mb-0'>Vehicle List</h2>
                        <DownloadButton rowData={administration} fileName={"administration"}/>
                    </div>
                    <button className='button-text add-employee '>Add Employee</button>
                </div>
                {/* ------ table ------ */}
                <table className='my-3'>
                    <thead>
                        <tr>
                            <th >S.No</th>
                            <th >Vehicle  Reg. No.</th>
                            <th>Driver  Registration</th>
                            <th>Vehicle RC</th>
                            <th>Insurance</th>
                            <th>PUC</th>
                            <th>RoadTax</th>
                            <th>Fitness certificate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {administration.map((item) => {
                            return (
                                <tr key={item.sno}>
                                    <td>{item.sno}</td>
                                    <td className='text-success'>{item.vehicalno}</td>
                                    <td>{item.registration}</td>
                                    <td><Link className='text-decoration-none'> {item.rc}</Link></td>
                                    <td>{item.insurance}</td>
                                    <td>{item.puc}</td>
                                    <td>{item.tax}</td>
                                    <td>{item.fitness}</td>
                                    <td><div className='d-flex align-items-center justify-content-center gap-1'><button className='eye'>{item.icon1}</button><button className='edit'>{item.icon2}</button>
                                        <button className='delete'><img className='img-delete' src={item.imageUrl}></img></button></div></td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>
                <div className=''>                    
                <NormalPagination/>
                </div>
            </div>
        </>
    )
}

export default Administration