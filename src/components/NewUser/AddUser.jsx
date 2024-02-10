import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const AddUser = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    company: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the user data in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    setUserData((prevState) => ({ ...prevState, userData }))
    navigate("/");

    // Reset the form data
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      company: '',
    });
  };

  return (
    <>
      <div className="max-w-container mx-auto">
        <div className=" w-[80%] sm:w-[50%] md:w-[50%] lg:w-[40%] bg-slate-100 border-[4px] border-gray-500 p-10 rounded-[10px] mx-auto mt-6">
          <h1 className="text-center mb-6 uppercase">New User</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-6">
              <div>
                <label htmlFor="firstName" className="block">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Enter First Name"
                  value={userData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Enter Last Name"
                  value={userData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Enter Email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="address" className="block">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Enter Address"
                  value={userData.address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="company" className="block">Company:</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Enter Company Name"
                  value={userData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="">
              <button className="py-4 px-4 sm:px-6 md:px-8 lg:px-10  bg-teal-700 uppercase mt-10 text-white rounded-[8px] inline-block" type="submit">Add User</button>
              <Link to='/' className=" bg-red-800 text-white py-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-[8px] inline-block ml-2 sm:ml-2 md:ml-2 lg:ml-4">Cancel</Link>
            </div>
          </form>

        </div>
      </div>
    </>

  );
};

export default AddUser;