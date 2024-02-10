import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";



const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user details based on the userId
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();

  }, [userId]);


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-container mx-auto">

        <div className="p-4 rounded text-center w-[50%] mt-[80px] ml-[25%] card glass shadow-xl bg-neutral text-neutral-content">
          <img src={user.image} alt="Avatar" className="w-16 h-16 rounded-full mx-auto mb-2" />
          <h3 className="text-lg font-bold text-center">{`${user.firstName} ${user.lastName}`}</h3>
          <p className="text-gray-100 text-center">{user.email}</p>
          <p className="text-sm text-gray-100">{`${user.address.address}, ${user.address.state}, ${user.address.city}`}</p>
          <p className="text-sm text-gray-100">{user.company.name}</p>
        </div>
        <Link className='py-4 px-10 bg-slate-200 flex items-center justify-center w-[190px] mx-auto mt-3 text-black' to="/"> <IoArrowBackOutline className='mr-2' />Home</Link>
      </div>
    </>

  );
};

export default UserDetails;