import { useQuery } from "@tanstack/react-query";
import RequestCard from "../RequestCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import Loader from "../../../components/Loader/Loader";

function AgreementRequest() {
  const axiosPublic = useAxiosPublic();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["bookedApartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookedApartments");
      return res.data;
    },
  });

  const handleAccept = (id) => {
    axiosPublic
      .patch(`/bookedApartments/${id}`, { role: "member" })
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReject = (id) => {
    axiosPublic
      .patch(`/bookedApartments/${id}`, { role: "" })
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">
        Agreement Request page
      </h1>
      <div className="py-10">
        {isPending ? (
          <Loader />
        ) : data.length > 0 ? (
          data?.map((apartment) => (
            <RequestCard
              handleAccept={handleAccept}
              handleReject={handleReject}
              key={apartment._id}
              apartment={apartment}
            />
          ))
        ) : (
          "No data Found"
        )}
      </div>
    </div>
  );
}

export default AgreementRequest;
