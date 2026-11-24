import { Card, Button } from "flowbite-react";
import {
  HiArrowLeft,
  HiCheckCircle,
  HiXCircle,
  HiLocationMarker,
  HiCalendar,
  HiUser,
  HiDocumentText,
} from "react-icons/hi";


import { Link } from "react-router-dom";

function ViewReport() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button color="light">
          <HiArrowLeft className="mr-2" />
          <Link to="/admin">Back</Link>
        </Button>

        <div>
          <h1 className="text-2xl font-bold text-[#173D34]">
            View Hazard Report
          </h1>
          <p className="text-gray-500 text-sm">
            Review the submitted hazard report.
          </p>
        </div>
      </div>

      <Card className="shadow-sm border border-gray-100 p-4">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div>
            <p className="text-sm text-gray-500">Report ID</p>
            <h2 className="text-xl font-bold text-[#173D34]">SR001</h2>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
            Pending
          </span>
        </div>

        <hr />

        <h2 className="text-xl font-bold text-gray-800">Large Pothole</h2>

        <p className="text-sm text-gray-500">Category: Pothole</p>

        <img
          src="https://ichef.bbci.co.uk/news/480/cpsprodpb/df2c/live/4e2fedb0-2873-11f1-831a-89df8c4bf49f.jpg.webp"
          alt="Reported road hazard"
          className="w-full h-full  object-cover rounded-xl"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex items-center gap-3">
            <HiUser className="text-[#26745B] text-xl" />
            <div>
              <p className="text-xs text-gray-500">Reported By</p>
              <p className="font-semibold">Arun</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HiDocumentText className="text-[#26745B] text-xl" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="font-semibold">arun@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HiLocationMarker className="text-[#26745B] text-xl" />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="font-semibold">Kochi, Kerala</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HiCalendar className="text-[#26745B] text-xl" />
            <div>
              <p className="text-xs text-gray-500">Reported Date</p>
              <p className="font-semibold">24 November 2026</p>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h3 className="font-bold text-gray-800 mb-2">Description</h3>

          <p className="text-gray-600 leading-7">
            A large pothole has developed on the main road. It is causing
            difficulty for vehicles and may lead to accidents.
          </p>
        </div>
      </Card>

      <Card className="shadow-sm border border-gray-100 p-4">
        <h2 className="text-lg font-bold text-[#173D34]">Admin Review</h2>

        <p className="text-sm text-gray-500">
          Review the report and decide whether to approve or reject it.
        </p>

        <div className="flex flex-wrap gap-3 mt-3">
          <Button color="success">
            <HiCheckCircle className="mr-2 h-5 w-5" />
            Approve Report
          </Button>

          <Button color="failure">
            <HiXCircle className="mr-2 h-5 w-5" />
            Reject Report
          </Button>
        </div>
      </Card>
    </div>

    
  );
}

export default ViewReport;
