import LineChart from "./LineChart";
import Map from "./Map";

function ChartsAndMaps() {
  return (
    <div className="w-full overflow-x-hidden pr-4 overflow-y-auto">
      <h1 className="text-center text-[30px] font-bold">Covid-19 Dashboard</h1>
      <LineChart />
      <br />
      <br />
      <p className="text-[20px] font-semibold text-center">Map</p>
      <Map />
    </div>
  );
}

export default ChartsAndMaps;
