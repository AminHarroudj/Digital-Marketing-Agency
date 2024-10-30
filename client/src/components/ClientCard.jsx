// eslint-disable-next-line react/prop-types
function ClientCard({children,name,job,say}) {
  return (
    <>
      <div className="flex flex-col gap-6 text-lg border-2 rounded-xl p-6">
        <div className="flex items-center gap-4">
            <div className="w-12">{children}</div>
            <div className="flex flex-col">
                <h1>{name}</h1>
                <p className="text-gray-500">{job}</p>
            </div>
        </div>
        <div>
            <p>{say}</p>
        </div>
      </div>
    </>
  );
}

export default ClientCard;
