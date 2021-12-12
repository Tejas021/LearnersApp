import React from 'react'

const Segregate = () => {
    return (
        <div>
            <div style={{border:"1px solid black"}} className='row'>
                <div style={{borderRight:"1px solid black"}} className='col-md-4 bg-success'>
                    <h3 style={{borderBottom:"1px solid black"}}>Fast Learner</h3>
                    <h6>12</h6> <hr />
                    <h6>12</h6> <hr />
                    <h6>12</h6> <hr />
                </div>
                <div style={{borderRight:"1px solid black"}} className='col-md-4 bg-warning'>
                    <h3 style={{borderBottom:"1px solid black"}}>AverageLearner</h3>
                    <h6>12</h6> <hr />
                    <h6>12</h6> <hr />
                    <h6>12</h6> <hr />
                </div>
                <div style={{borderRight:"1px solid black"}} className='col-md-4 bg-danger'>
                    <h3 style={{borderBottom:"1px solid black"}}>Slow Learner</h3>
                    <h6>12</h6> <hr />
                    <h6>12</h6> <hr />
                    <h6>12</h6> <hr />
                </div>
            </div>
        </div>
    )
}

export default Segregate
