import NoContactIcon from "../../assets/noContact.svg";

function NoContactFound() {
  return (
    <div className="w-[100%] py-[100px] bg-white rounded-md m-auto p-4 border border-black text-center">
      <div className="flex m-auto w-fit gap-4">
        <img src={NoContactIcon} alt="no contact icon" width={40}/>
        <text className="text-[30px] font-bold">No Contact Found</text>
      </div>
      <br />
      <text className="text-[20px]">
        Please add contact from Add New Contact Button
      </text>
    </div>
  );
}

export default NoContactFound;
