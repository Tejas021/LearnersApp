
import React from 'react'
import { useState, useEffect } from "react"
import { publicRequest } from "../../axios"

const SubjectEval = () => {
    const [result, setResult] = useState(null)

    useEffect(() => {
        const fetchResult = async () => {
            try {
                const students = await publicRequest.get(`/subject/fetchSubject?subject=BEE`)
                const data = await students.data
                setResult(data)
                // console.log(result)
            } catch (err) {
                console.log(err)
            }
        }
        fetchResult();
    }, [])
    console.log(result)
    return (
        <div>
            <div style={{ marginTop: "5%" }} className="table-responsive">
                <table className="table   table-info table-hover table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col" >{result[0]?.name}</th>
                            <th scope="col" style={{ textAlign: "center" }}>IA-1</th>
                            <th scope="col" style={{ textAlign: "center" }}>IA-2</th>
                            <th scope="col" style={{ textAlign: "center" }}>Viva</th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                Semester
                            </th>
                            <th scope="col" style={{ textAlign: "center" }}>
                                Percentage
                            </th>
                        </tr>
                    </thead>


                    {
                      result?.map(res => {
                        return <>
                            <tbody>
                                <tr >
                                    <th scope="row" >{res.student}</th>
                                    <td>{res.IA1}</td>
                                    <td>{res.IA2}</td>
                                    <td>{res.viva}</td>
                                    <td>{res.semester}</td>
                                    <td>80%</td>

                                </tr>
                            </tbody>
                        </>
                    })
                }
                </table>
            </div>
        </div>
    )
}

export default SubjectEval
