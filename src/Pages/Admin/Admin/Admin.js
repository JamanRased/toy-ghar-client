import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../../AddProducts/AddProducts';
import AddReview from '../../AddReview/AddReview';
import Services from '../../Services/Services';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';

const Admin = () => {
    const [control, setControl] = useState("AddProducts", "manageallproducts", "makeadmin", "addreview", "myorder");
    const {admin} = useAuth()
    console.log(admin)
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                <div className="row admin-container">
                    <div className="col-md-3 ">
                        <div className="admin-area p-2">
                            <h3>Admin Dashboard</h3>
                            <div className="all-menu mt-5">
                                {
                                admin? 
                                <div>
                                <li onClick={() => setControl("AddProducts")} className="admin-menu p-2">Add Products</li>
                                <li onClick={() => setControl("manageallproducts")} className="admin-menu p-2">Manage All Products</li>
                                <li onClick={() => setControl("makeadmin")} className="admin-menu p-2">Make an Admin</li>
                                </div>
                                :
                                <div>
                                <li onClick={() => setControl("addreview")} className="addreview p-2">Add Review</li>
                                <li onClick={() => setControl("myorder")} className="myorder p-2">My Order</li>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 text-center  text-center">
                        {control === "services" && <Services></Services>}
                        {control === "manageallproducts" && <ManageAllProducts></ManageAllProducts>}
                        {control === "AddProducts" && <AddProducts></AddProducts>}
                        {control === "makeadmin" && <MakeAdmin></MakeAdmin>}
                        {control === "addreview" && <AddReview></AddReview>}
                        {control === "myorder" && <MyOrder></MyOrder>}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};
export default Admin;