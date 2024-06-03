import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import Card from "../Card/Card";
import Loader from "../../../components/Loader/Loader";

function Apartment() {
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartments.json");
      return res.data;
    },
  });

  if (isPending) return <Loader />;

  return (
    <div className="grid md:grid-cols-2 gap-8 py-10">
      {data?.map((apartment) => (
        <Card key={apartment._id} apartment={apartment} />
      ))}
    </div>
  );
}

export default Apartment;
