import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import Loader from "../../../components/Loader/Loader";
import Swal from "sweetalert2";

function ManageMember() {
  const axiosPublic = useAxiosPublic();

  const { isPending, data, refetch } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosPublic.get("/members");
      return res.data;
    },
  });

  const handleRemove = (id) => {
 
    // axiosPublic
    //   .put(`/members/${id}`)
    //   .then((res) => {
    //     Swal.fire({
    //       title: res.data.message,
    //       icon: "success",
    //     });
    //     refetch();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     Swal.fire({
    //       title: "Something went wrong. Try later!",
    //       icon: "warning",
    //     });
    //   });




    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        
        
        
 axiosPublic
      .put(`/members/${id}`)
      .then((res) => {
        Swal.fire({
          title: res.data.message,
          icon: "success",
        });
        refetch();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong. Try later!",
          icon: "warning",
        });
      });




      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });




  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Manage Member Page</h1>
      <div>
        {isPending ? (
          <Loader />
        ) : data.length > 0 ? (
          data?.map((member) => (
            <Card
              key={member._id}
              member={member}
              handleRemove={handleRemove}
            />
          ))
        ) : (
          "No members available"
        )}
      </div>
    </div>
  );
}

export default ManageMember;
