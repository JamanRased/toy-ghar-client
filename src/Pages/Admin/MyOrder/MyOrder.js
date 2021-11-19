import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://salty-lake-71645.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[email]);

  const handleDelete = (id) => {
    fetch(`https://salty-lake-71645.herokuapp.com/delteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };
    return (
        <div>
            <div  className=' services bg-warning p-2'>
                <h2 className='p-3 m-3'>My Order</h2>
                <div className=' p-5 m-0'>
                    {services.map((booking) =>(
                        <div key = {booking._id}className='row'>
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between border shadow rounded m-2 p-2">
                                <h4>Detailes Of : {booking.name}</h4>
                                <h3>Price Of : {booking.Price} Tk</h3>  
                                    <h3 className="text-danger"> Price :{booking?.Price}Tk</h3>
                                    <button
                                        onClick={()=> handleDelete(booking?._id)}
                                        className="btn btn-danger">Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MyOrder;