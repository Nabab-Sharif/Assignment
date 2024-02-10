import { Link } from "react-router-dom"


const NewUserCard = ({ user, index }) => {

  return (
    <>
      <div className="p-4 rounded text-center card glass shadow-xl bg-neutral text-neutral-content">
        <div className="w-16 h-16 rounded-full mx-auto mb-2 bg-gray-500 border border-indigo-700"></div>
        <Link to={`/newUsers/${index}`} >
          <h3 className="text-lg font-bold text-center">{`${user.firstName} ${user.lastName}`}</h3>
        </Link>
        <p className="text-gray-100 text-center">{user.email}</p>
        <p className="text-sm text-gray-100">{user.address}</p>
        <p className="text-sm text-gray-100">{user.company}</p>
      </div>
    </>
  )
}

export default NewUserCard