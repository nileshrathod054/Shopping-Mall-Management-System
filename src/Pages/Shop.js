import React, { useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "./Shop.css";

/*The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application. */
const Shop = ({ post, handleDelete }) => {
  const [shop_id, setShop_id] = useState("");
  const [shop_category, setShop_category] = useState("");
  const [shop_name, setShop_name] = useState("");
  const [customers, setCustomers] = useState("");
  const [shop_status, setShop_status] = useState("");
  const [shop_owner, setShop_owner] = useState("");
  const [lease_status, setLease_status] = useState("");

  const handlePost = () => {
    const data = {
      shop_id: shop_id,
      shop_category: shop_category,
      shop_name: shop_name,
      customers: customers,
      shop_status: shop_status,
      shop_owner: shop_owner,
      lease_status: lease_status,
    };

    /*Axios is a promise based HTTP client for the browser and Node.js.
    Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform 
    CRUD operations. It can be used in plain Javascript or with a library such as Vue or React.

*/
    axios
      .post(`http://localhost:8890/shop/`, data)
      .catch((err) => console.log("Error", err));
    console.log(data);
    window.location.reload();
  };
  const updateData = (
    shop_id,
    shop_category,
    shop_name,
    customers,
    shop_status,
    shop_owner,
    lease_status
  ) => {
    const data = {
      shop_id: shop_id,
      shop_category: shop_category,
      shop_name: shop_name,
      customers: customers,
      shop_status: shop_status,
      shop_owner: shop_owner,
      lease_status: lease_status,
    };
    //console.table(id)
    axios
      .put(`http://localhost:8890/shop/${shop_id}`, data)
      .catch((err) => console.log("Error", err));

    window.location.reload();
  };
  //Created a form to insert the data inside table.
  return (
    <>
      <div class="form">
        <div className="form1">
          <h2 className="id">Shop </h2>
          <div className="form1">
            <b>
              <label class="id1">Shop Id</label>
            </b>
            <br />
            <input
              type="text"
              placeholder="Enter Shop Id"
              value={shop_id}
              onChange={(e) => setShop_id(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="form1">
            <b>
              <label class="id1">Shop Category</label>
            </b>
            <br />
            <input
              type="text"
              value={shop_category}
              placeholder="Enter Shop Category"
              onChange={(e) => setShop_category(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="form1">
            <b>
              <label class="id1">Shop Name</label>
            </b>
            <br />
            <input
              type="text"
              value={shop_name}
              placeholder="Enter Shop Name"
              onChange={(e) => setShop_name(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="form1">
            <b>
              <label class="id1">Customer Name</label>
            </b>
            <br />
            <input
              type="text"
              value={customers}
              placeholder="Enter Customer Name"
              onChange={(e) => setCustomers(e.target.value)}
            />
            <br />
            <br />
          </div>

          <div className="form1">
            <b>
              <label class="id1">Shop Status</label>
            </b>
            <br />
            <input
              type="text"
              value={shop_status}
              placeholder="Enter Shop Status"
              onChange={(e) => setShop_status(e.target.value)}
            />
            <br />
            <br />
          </div>

          <div className="form1">
            <b>
              <label class="id1">Shop Owner</label>
            </b>
            <br />
            <input
              type="text"
              value={shop_owner}
              placeholder="Enter Shop Owner's Name"
              onChange={(e) => setShop_owner(e.target.value)}
            />
            <br />
            <br />
          </div>

          <div className="form1">
            <b>
              <label class="id1">Lease Status</label>
            </b>
            <br />
            <input
              type="text"
              value={lease_status}
              placeholder="Enter Lease Staus"
              onChange={(e) => setLease_status(e.target.value)}
            />
            <br />
            <br />
          </div>

          <button class="btn" onClick={handlePost}>
            Submit
          </button>
        </div>
      </div>
      <h2 className="id">Updated Data</h2>
      <div className="App">
        <table
          border="1"
          cellPadding="10"
          className="table table-bordered table-striped"
        >
          <tbody>
            <tr>
              <th>Shop Id</th>
              <th>Shop Category</th>
              <th>Shop Name</th>
              <th>Customer</th>
              <th>Shop Status</th>
              <th>Shop Owner</th>
              <th>Lease Status</th>
              <th>Action</th>
            </tr>
            {post &&
              post.map((Post) => (
                <tr class="id2">
                  <td>{Post.shop_id}</td>
                  <td>{Post.shop_category}</td>
                  <td>{Post.shop_name}</td>
                  <td>{Post.customers}</td>
                  <td>{Post.shop_status}</td>
                  <td>{Post.shop_owner}</td>
                  <td>{Post.lease_status}</td>

                  <td>
                    <Popup
                      trigger={
                        <button className="btn btn-primary">Update</button>
                      }
                      position="right 15px"
                    >
                      <h4 className="id">Update Data Here</h4>
                      <label class="name">Enter Shop Id</label>
                      <br />
                      <input
                        type="text"
                        placeholder={Post.id}
                        onChange={(e) => setShop_id(e.target.value)}
                      />
                      <br />
                      <label class="name">Enter Shop Category</label>
                      <br />
                      <input
                        type="text"
                        placeholder={Post.shop_category}
                        onChange={(e) => setShop_category(e.target.value)}
                      />
                      <br />
                      <label class="name">Enter Shop Name</label>
                      <br />
                      <input
                        type="text"
                        placeholder={Post.shop_name}
                        onChange={(e) => setShop_name(e.target.value)}
                      />
                      <br />
                      <label class="name">Enter Customer Name</label>
                      <br />
                      <input
                        type="text"
                        placeholder={Post.customers}
                        onChange={(e) => setCustomers(e.target.value)}
                      />
                      <br />
                      <label class="name">Enter Shop Status</label>
                      <br />
                      <input
                        type="text"
                        placeholder={Post.shop_status}
                        onChange={(e) => setShop_status(e.target.value)}
                      />
                      <br />
                      <label class="name">Enter Shop Owner</label>
                      <br />
                      <input
                        type="text"
                        placeholder={Post.shop_owner}
                        onChange={(e) => setShop_owner(e.target.value)}
                      />
                      <br />
                      <label class="name">Enter Lease Status</label>
                      <br />
                      <input
                        type="text"
                        placeholder={Post.lease_status}
                        onChange={(e) => setLease_status(e.target.value)}
                      />
                      <br />

                      <button
                        class="btn btn-primary"
                        onClick={() =>
                          updateData(
                            Post.shop_id,
                            shop_category,
                            shop_name,
                            customers,
                            shop_status,
                            shop_owner,
                            lease_status
                          )
                        }
                      >
                        Update
                      </button>
                    </Popup>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(Post.shop_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Shop;
