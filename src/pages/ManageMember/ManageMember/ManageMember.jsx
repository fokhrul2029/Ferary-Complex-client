import Card from "../Card/Card";

function ManageMember() {
  const handleRemove = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Manage Member Page</h1>
      <div>
        <Card handleRemove={handleRemove} />
        <Card handleRemove={handleRemove} />
        <Card handleRemove={handleRemove} />
      </div>
    </div>
  );
}

export default ManageMember;
