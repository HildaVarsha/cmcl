"use client";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import {
  FloodInfoCard,
  LatestStations,
  ReadingChart,
  ReadingTable,
  WelcomeCard,
} from "@/components/home";
import { useDebounce } from "@/components/hooks";
import { Card } from "@/components/ui";

interface Station {
  stationReference: string;
  label: string;
}

interface Reading {
  dateTime: string;
  value: number;
}

const FloodMonitoring: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [filteredStations, setFilteredStations] = useState<Station[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [readings, setReadings] = useState<{ time: string; value: number }[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  // Debounce user input
  const debouncedSearch = useDebounce(searchTerm, 100);

  // Fetch all stations on component mount
  const fetchStations = async () => {
    try {
      const response = await fetch(
        `https://environment.data.gov.uk/flood-monitoring/id/stations.json`
      );
      const data = await response.json();

      const stationsList = Array.isArray(data.items)
        ? data.items.map(
            (item: { label: string; stationReference: string }) => ({
              label: item.label || "Unknown Station",
              stationReference: item.stationReference || "",
            })
          )
        : [];

      setStations(stationsList);
      setSelectedStation(stationsList?.[0]);
    } catch (error) {
      console.error("Error fetching stations:", error);
      setStations([]);
    }
  };

  useEffect(() => {
    fetchStations();
  }, []);

  // Fetch station data dynamically based on search term
  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredStations([]);
      return;
    }

    const results =
      Array.isArray(stations) && stations.length > 0
        ? stations.filter(
            (item) =>
              typeof item.label === "string" &&
              item.label.toLowerCase().includes(debouncedSearch.toLowerCase())
          )
        : [];

    setFilteredStations(results.slice(0, 10));
  }, [debouncedSearch, stations]);

  // Fetch station readings when a station is selected
  useEffect(() => {
    if (!selectedStation) return;

    const fetchReadings = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://environment.data.gov.uk/flood-monitoring/id/stations/${selectedStation.stationReference}/readings?_limit=24`
        );
        const data = await response.json();

        if (data?.items) {
          setReadings(
            data?.items.map((item: Reading) => ({
              time: new Date(item.dateTime).toLocaleTimeString(),
              value: item.value,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching readings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReadings();
  }, [selectedStation]);
  console.log(selectedStation, "selectedStation");

  const SelectStationComp = () => {
    return (
      <Command className="w-full md:w-96 border rounded-md h-full">
        <CommandInput
          autoFocus={true}
          placeholder="Search for a station..."
          value={searchTerm}
          onValueChange={(value) => setSearchTerm(value)}
        />

        <CommandList>
          <CommandGroup>
            {filteredStations.map((station) => (
              <CommandItem
                key={station.stationReference}
                onSelect={() => {
                  setSelectedStation(station);
                  setFilteredStations([]);
                  setSearchTerm(station?.label);
                }}
              >
                {station.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </Command>
    );
  };
  return (
    <div className="flex flex-col items-center space-y-6 lg:h-screen">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        <WelcomeCard />
        <FloodInfoCard totalStation={stations?.length} />
      </div>
      <div className="my-6 w-full">
        <LatestStations station={stations?.slice(0, 4)} />
      </div>

      <div className="w-full pt-6 flex flex-col md:flex-row gap-8">
        <Card className="p-6 w-full gap-2">
          <p className="text-xl font-semibold border-b pb-3 border-slate-300">
            Check Readings
          </p>

          <div className="flex gap-8 items-center mt-8">
            <h1 className="text-lg pb-3 text-slate-500">Select a station</h1>

            {selectedStation && (
              <h1 className="pb-3">
                selected station - <strong>{selectedStation?.label}</strong>
              </h1>
            )}
          </div>
          <SelectStationComp />
        </Card>

        <Card className="p-6 w-full gap-3">
          <p className="text-xl font-semibold border-b pb-3 border-slate-300">
            Reading Graph
          </p>
          {loading ? (
            <p>Loading chart...</p>
          ) : readings.length > 0 ? (
            <ReadingChart data={readings} />
          ) : (
            <p className="text-lg h-44 flex items-center justify-center font-semibold">
              No readings available.
            </p>
          )}
        </Card>
      </div>

      <Card className="p-6 w-full mt-8">
        {loading ? (
          <p>Loading table...</p>
        ) : readings.length > 0 ? (
          <ReadingTable readingsData={readings} />
        ) : (
          <p className="text-lg  flex items-center justify-center font-semibold">
            No readings data available.
          </p>
        )}
      </Card>
    </div>
  );
};

export default React.memo(FloodMonitoring);
