import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <div className="mb-3">
        <h1 className="font-semibold text-xl text-gray-800">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-500">📍 India</p>
      </div>

      <div className="mb-4">
        <h2 className="font-bold text-lg text-[#1d3557] mb-1">{job?.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{job?.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge
          className="text-blue-600 font-semibold bg-blue-50"
          variant="outline"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className="text-red-600 font-semibold bg-red-50"
          variant="outline"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="text-purple-700 font-semibold bg-purple-50"
          variant="outline"
        >
          ₹{job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
