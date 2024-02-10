import { Link } from 'react-router-dom';


const UserCard = ({ user }) => {


  return (
    <>

      <div className="p-4 rounded text-center card glass shadow-xl bg-neutral text-neutral-content">
        <img src={user.image} alt="Avatar" className="w-16 h-16 rounded-full mx-auto mb-2" />
        <Link to={`/users/${user.id}`}>
          <h3 className="text-lg font-bold text-center">{`${user.firstName} ${user.lastName}`}</h3>
        </Link>
        <p className="text-gray-100 text-center">{user.email}</p>
        <p className="text-sm text-gray-100">{`${user.address.address}, ${user.address.state}, ${user.address.city}`}</p>
        <p className="text-sm text-gray-100">{user.company.name}</p>
      </div>

    </>
  );
};

export default UserCard;