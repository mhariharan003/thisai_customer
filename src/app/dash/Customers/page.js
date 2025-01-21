"use client"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Charts from "./Charts/Both";
import CustomerList from "./CustomerList";
import BookingList from "./BookingList";


export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-[#f3f3f3] p-[20px]">
        <Header/>
          <div className="flex gap-8">
              <Sidebar/>
            <div className="flex bg-white p-[20px] rounded-[12px] gap-[20px]">
              <CustomerList/>
                <div>
                  <Charts/>
                  <BookingList/>
                </div>
            </div>
          </div>
      </div>
  );
}

