import React from 'react'

function Display({data}) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-3'>Display
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h1>{data.formData.good1}</h1>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h1>{data.formData.good2}</h1>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h1>{data.formData.good3}</h1>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h1>{data.formData.bad1}</h1>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h1>{data.formData.bad2}</h1>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h1>{data.formData.bad3}</h1>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h1>{data.formData.bad4}</h1>
  </div>
</div>

    </div>
  )
}

export default Display