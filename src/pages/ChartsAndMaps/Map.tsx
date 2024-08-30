import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";

function Map() {
  const { isLoading: coutryDataLoading, data: countryData } = useQuery(
    "countryData",
    () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((res) =>
        res.json()
      )
  );

  const countryDataFormatted = useMemo(() => {
    if (coutryDataLoading || countryData.length === 0) {
      return [];
    }

    return countryData?.map((country) => ({
      name: country.country,
      lat: country.countryInfo.lat,
      long: country.countryInfo.long,
      active: country.active,
      recovered: country.recovered,
      deaths: country.deaths,
    }));
  }, [countryData]);

  return (
    <div className="h-[400px] md:h-[600px] lg:h-[750px] border border-gray-800 overflow-hidden">
      <MapContainer center={[0, 0]} zoom={2} className="w-full h-[400px] md:h-[600px] lg:h-[750px]">
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=D5NzAS4gSDH0nxZ7amTw" />
        {countryDataFormatted.length > 0 &&
          countryDataFormatted?.map((country) => (
            <Marker key={country.name} position={[country.lat, country.long]}>
              <Popup>
                <p className="font-semibold">Name: {country.name}</p>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

export default Map;
