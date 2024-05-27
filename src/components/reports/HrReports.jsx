import React, { useState } from 'react'
import DownloadButton from '../commonComponents/DownloadButton'
import './Reports.css'
import { Link } from 'react-router-dom'
import { ProfilePic } from '../../assets'
import NormalPagination from '../commonComponents/NormalPagination'
const HrReports = () => {
    const [driverList ,setdriverList] = useState([
        {sno:1,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:2,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:3,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:4,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:5,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:6,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:7,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:8,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
        {sno:9,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'view',attendence:'view',clockIn:'09:00',clockOut:'Clock Out'},
    ])
  return (
    <>
    <div className='common-border w-100 h-100 py-3 px-4 '>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex  gap-4'>
                <h2 className='employee-list mb-0'>Driver List</h2>
                {/* <button className=' px-4 py-2 button-text'>Download CSV</button> */}
            </div>
            <DownloadButton rowData={driverList} fileName={"driversList"}/>

        </div>
        {/* ------ table ------ */}
        <table className='my-3'>
            <thead>
                <tr>
                    <th >S. No</th>
                    <th>Profile Pic</th>
                    <th>Driver Name</th>
                    <th>Contact No.</th>
                    <th>Vehicle Photos</th>
                    <th>Attendance</th>
                    <th>Clock In</th>
                    <th>Clock Out</th>
                </tr>
            </thead>
            <tbody>
                {driverList.map((data) => {
                    return (
                        <tr key={data.sno}>
                            <td>{data.sno}</td>
                            <td ><img className='profile-pic' src={data.imageUrl}></img></td>
                            <td>{data.driverName}</td>
                            <td>{data.contact}</td>
                            <td><Link className='text-decoration-none'>{data.photo}</Link></td>
                            <td><Link className='text-decoration-none text-success'>{data.attendence}</Link></td>
                            <td><button type="button" className="btn btn-sm btn-outline-success px-4 fw-bold text-secondary">{data.clockIn}</button></td>
                            <td><button type="button" className="btn btn-sm btn-outline-danger fw-bold text-secondary">{data.clockOut}</button></td>
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

export default HrReports