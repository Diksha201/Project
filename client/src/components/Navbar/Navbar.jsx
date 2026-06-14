import { useSelector } from "react-redux";
import UserNavbar from "./UserNavbar";
import GuestNavbar from "./GuestNavbar";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);

  return user ? <UserNavbar /> : <GuestNavbar />;
}