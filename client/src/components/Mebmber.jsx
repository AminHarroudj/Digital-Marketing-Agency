// eslint-disable-next-line react/prop-types
function Mebmber({children , name , job}) {
  return (
    <>
      <div className="flex flex-col gap-2 text-lg">
        <div>{children}</div>
        <h1 className="text-xl font-medium">{name}</h1>
        <p className="text-gray-500">{job}</p>
      </div>
    </>
  );
}

export default Mebmber;
