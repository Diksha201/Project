import { useSelector } from "react-redux";

export default function Dashboard(){
  const { user } = useSelector(s=>s.auth);
  return (
    <div className="max-w-6xl mx-auto pt-24 px-4">
      <h1 className="text-2xl font-bold">Welcome, {user?.firstName || "User"}</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Your Bookings</h3>
          <p className="text-sm text-gray-600">Coming soon…</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Wishlist</h3>
          <p className="text-sm text-gray-600">Vendors you liked</p>
        </div>
         <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Cart</h3>
          <p className="text-sm text-gray-600">Vendors you liked</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Profile</h3>
          <p className="text-sm text-gray-600">Update photo & details</p>
        </div>
          <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Logout</h3>
          <p className="text-sm text-gray-600">Sign out of your account</p>
        </div>
      </div>
    </div>
  );
}