import React from 'react'

const Table = () => {
    return (
        <div>
            <div className="table-responsive">
                <table className="table   table-info table-hover table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col" rowSpan="2">Student Id</th>
                            <th scope="col" rowSpan="2">Roll no</th>
                            <th scope="col" colSpan="2" style={{ textAlign: "center" }}>IA-1</th>
                            <th scope="col" colSpan="2" style={{ textAlign: "center" }}>IA-2</th>
                            <th scope="col" colSpan="2" style={{ textAlign: "center" }}>Term Work</th>
                            <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                                End Sem exam
                            </th>
                            <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                                Percentage
                            </th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>

                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">scored</th>
                            <th scope="col">o/f</th>
                            <th scope="col">scored</th>
                            <th scope="col">o/f</th>
                            <th scope="col">scored</th>
                            <th scope="col">o/f</th>
                            <th scope="col">scored</th>
                            <th scope="col">o/f</th>
                            <th scope="col">scored</th>
                            <th scope="col">o/f</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                            <tr >   
                            <th >data</th>
                            <th >data</th>
                            <td>data</td>
                            <td>20</td>      
                            <td>data</td>
                            <td>20</td>
                            <td>data</td>
                            <td>25</td>                 
                            <td>data</td>
                            <td>80</td>
                            <td>data</td>
                            <td>100</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Table
