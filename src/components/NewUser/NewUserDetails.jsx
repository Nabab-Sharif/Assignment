import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";



const NewUserDetails = () => {

  const { userId } = useParams();
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {

    const LocalStoreFrom = () => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.forEach((item) => setNewUser(item))
    }
    LocalStoreFrom()

  }, [userId]);


  if (!newUser) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="max-w-container mx-auto">

        <div className="p-4 rounded text-center w-[50%] mt-[80px] ml-[25%] card glass shadow-xl bg-neutral text-neutral-content">

          <div className="w-16 h-16 rounded-full mx-auto mb-2 bg-gray-500 border border-indigo-700"></div>
          <Link to={`/newUsers/${userId}`} >
            <h3 className="text-lg font-bold text-center">{`${newUser.firstName} ${newUser.lastName}`}</h3>
          </Link>
          <p className="text-gray-100 text-center">{newUser.email}</p>
          <p className="text-sm text-gray-100">{newUser.address}</p>
          <p className="text-sm text-gray-100">{newUser.company}</p>

        </div>
        <Link className='py-4 px-10 bg-slate-200 flex items-center justify-center w-[190px] mx-auto mt-3 text-black' to="/"> <IoArrowBackOutline className='mr-2' />Home</Link>
      </div>
    </>

  );
};

export default NewUserDetails;