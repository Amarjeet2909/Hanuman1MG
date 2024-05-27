import React, { useState } from 'react'
import DownloadButton from '../commonComponents/DownloadButton'
import { Link } from 'react-router-dom'
import { ProfilePic } from '../../assets'
import NormalPagination from '../commonComponents/NormalPagination'

const FitnessReport = () => {
    const [fitnessReport, setfitnessReport] = useState([
        {sno:1,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:2,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:3,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:4,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:5,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:6,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:7,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:8,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:9,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
        {sno:10,imageUrl:ProfilePic,driverName:'Aditya V.',contact:'+918799665484',photo:'View',time:'09:20',alcohol:'456789',status:'Done'},
    ])
  return (
    <>
    <div className='common-border w-100 h-100 py-3 px-4 '>
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex  gap-4'>
                <h2 className='employee-list mb-0'>Driver List</h2>
               
            </div>
            <DownloadButton rowData={fitnessReport} fileName={"fitnessReport"}/>

        </div>
        {/* ------ table ------ */}
        <table className='my-3'>
            <thead>
                <tr>
                  <th>S.no</th>
                  <th>Profile Pic</th>
                  <th>Driver Name</th>
                  <th>Contact No</th>
                  <th>Photos</th>
                  <th>Time</th>
                  <th>Alcohol Test Device No.</th>
                  <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {fitnessReport.map((data) => {
                    return (
                        <tr key={data.sno}>
                            <td>{data.sno}</td>
                            <td ><img className='profile-pic' src={data.imageUrl}></img></td>
                            <td>{data.driverName}</td>
                            <td>{data.contact}</td>
                            <td><Link className='text-decoration-none text-primary'>{data.photo}</Link></td>
                            <td>{data.time}</td>
                            <td><Link className='text-decoration-none text-success'>{data.alcohol}</Link></td>
                            <td>{data.status}</td>
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

export default FitnessReport