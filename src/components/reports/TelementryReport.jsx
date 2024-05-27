import React, { useState } from 'react'
import DownloadButton from '../commonComponents/DownloadButton'
import { Link } from 'react-router-dom'
import NormalPagination from '../commonComponents/NormalPagination'

const TelementryReport = () => {
    const [telementry, settelementry] = useState([
        { sno: 1, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
        { sno: 2, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
        { sno: 3, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
        { sno: 4, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
        { sno: 5, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
        { sno: 6, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
        { sno: 7, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
        { sno: 8, vehicalNo: 'BH05DS2145', reportTime: '09:20', ambulanceLocation: '#239, 11th cross, 1st street, sector 17, Gurgoan', endTime: '09:20', lastLocation: 'C Block Phase 1 BlockC, sector 21 ,Gurgoan ', route: 'View' },
    ])
    return (
        <>
            <div className='common-border w-100 h-100 py-3 px-4 '>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex  gap-4'>
                        <h2 className='employee-list mb-0'>Vehical List</h2>
                    </div>
                    <DownloadButton rowData={telementry} fileName={"telementry"} />

                </div>
                {/* ------ table ------ */}
                <table className='my-3'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Vehicle Reg. No.</th>
                            <th>ReportTime</th>
                            <th>Ambulance Site/Location</th>
                            <th>EndTime</th>
                            <th>Last known location</th>
                            <th>RouteMap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {telementry.map((data) => {
                            return (
                                <tr key={data.sno}>
                                    <td>{data.sno}</td>
                                    <td>{data.vehicalNo}</td>
                                    <td>{data.reportTime}</td>
                                    <td>{data.ambulanceLocation}</td>
                                    <td>{data.endTime}</td>
                                    <td>{data.lastLocation}</td>
                                    <td><button type="button" className="view-btn px-3 py-1">{data.route}</button></td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>
                <div className=''>
                    <NormalPagination />
                </div>
            </div>
        </>
    )
}

export default TelementryReport