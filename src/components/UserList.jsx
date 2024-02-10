import { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';
import UserListData from './NewUser/NewUserCard';
import { v4 as uuidv4 } from 'uuid';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [newUser, setNewUser] = useState([]);


  useEffect(() => {
    // Fetch user data from the API
    const fetchUsers = async () => {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data.users.filter(Boolean)]);
    };
    fetchUsers();

    //user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setNewUser(storedUsers);

  }, []);


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };


  // Filter and Sort the User List based on searchQuery and sortOption
  let filteredUsers = users.filter((user) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()));

  if (sortOption === 'name') {
    filteredUsers = filteredUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
  } else if (sortOption === 'email') {
    filteredUsers = filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
  } else if (sortOption === 'company') {
    filteredUsers = filteredUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
  }


  return (
    <>
      <div className="max-w-container mx-auto">
        <div className='mt-10 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-3 items-center justify-center'>
          <input type="text" placeholder="Search by name" value={searchQuery} onChange={handleSearch} className='py-4 px-4 w-[150px] sm:w-[160px] md:w-[200px] lg:w-[200px]  border border-gray-600 ' />
          <select value={sortOption} onChange={handleSort} className='py-4 px-2 sm:px-2 md:px-4 lg:px-4 w-[150px] sm:w-[160px] md:w-[200px] lg:w-[200px]  border border-gray-600  '>
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="company">Company</option>
          </select>
          <Link to='/addUser' className='py-4 px-4 w-[100px] sm:w-[100px] md:w-[100px] lg:w-[100px]  border border-gray-600 bg-green-800 text-white'>Add User</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[80px] mb-4 mx-4">
          {filteredUsers.map((user) => (
            <UserCard key={uuidv4()} user={user} />
          ))
          }
          {newUser.map((user, index) => (
            <UserListData key={index} user={user} index={index} />
          ))}
        </div>

      </div>
    </>

  );
};

export default UserList;