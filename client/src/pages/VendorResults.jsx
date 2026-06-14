import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchVendors } from "../redux/slices/vendorSlice";
import VendorCard from "../components/VendorCard";

export default function VendorResults(){
  const [params] = useSearchParams();
  const type = params.get("type");
  const city = params.get("city");
  const dispatch = useDispatch();
  const { list, loading } = useSelector(s=>s.vendors);

  useEffect(()=>{ if(type && city) dispatch(searchVendors({ type, city })); }, [type, city, dispatch]);

  return (
    <div className="max-w-6xl mx-auto pt-24 px-4">
      <h1 className="text-2xl font-bold mb-4">Vendors in {city} ({type})</h1>
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {list.map(v=> <VendorCard key={v._id} vendor={v} />)}
      </div>
    </div>
  );
}