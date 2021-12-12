import React from 'react'
import Segregate from './Segregate'

const Table = () => {
    return (
        <div>
            <div style={{marginTop:"5%"}} className="table-responsive">
                <table className="table   table-info table-hover table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col" >Student Name - roll no</th>    
                            <th scope="col" style={{ textAlign: "center" }}>IA-1</th>
                            <th scope="col" style={{ textAlign: "center" }}>IA-2</th>
                            <th scope="col" style={{ textAlign: "center" }}>Term Work</th>
                            <th scope="col" style={{ textAlign: "center" }}>Viva</th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                Semester
                            </th>
                            <th scope="col"  style={{ textAlign: "center" }}>
                                Percentage
                            </th>
                        </tr>
                    </thead>
                   
                    <tbody>
                    
                            <tr >   
                            <th scope="row" >subject</th>
                            <td>data</td>
                            <td>data</td>
                            <td>20</td>      
                            <td>data</td>
                            <td>20</td>
                            <td>data</td>
                            
                        </tr>
                    </tbody>

                </table>
            </div>

            <Segregate />
        </div>
    )
}

export default Table
