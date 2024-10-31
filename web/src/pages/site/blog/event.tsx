import { useState } from "react";
import useFetch from "../../../hooks/useFecth";

import ReactMarkdown from 'react-markdown';
import { displayCustomDate } from "../../../utils/date";
import { IEvent } from "../../../types/event.type";
import { Link } from "react-router-dom";
import { INew } from "../../../types/new.type";
import newFetch from "../../../hooks/newFecth";
import { useNavigate } from "react-router-dom";
export const Event = () => {

    const { data } = useFetch('http://localhost:1337/api/events?populate=*')
    const events = (data as any)?.data || [];
    const [event, setEvent] = useState<IEvent>();

    const { newData } = newFetch('http://localhost:1337/api/news?populate=*')
    const news = (newData as any)?.data || [];

    const navigate = useNavigate()
    function handleNew(documentId : any) {
        navigate(`/new/${documentId}`)
    }
    return (
        <div className="relative">
            <div
                className="h-[42rem] w-full bg-cover mb-5"
                style={{
                    backgroundImage: "url(/src/assets/images/booking_banner.jpg)",
                }}
            >
            </div>

            <div className="absolute left-1/2 top-[400px] -translate-x-1/2 -translate-y-24 space-y-5 text-3xl text-white">
                <div className="text-center text-5xl font-bold">Event</div>
                <div className="text-xl">
                    Where pets and owners live happily together
                </div>
            </div>

            <div className="">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Event" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-5 p-5 *:text-[#0d74b1]">
                            {events.map((event: IEvent) => (
                                <div
                                    key={event.id}
                                    className="bg-base-300 text-white rounded-xl p-4 flex flex-col w-[700px]"
                                    onClick={() => {
                                        setEvent(event);
                                        (document.getElementById('my_modal_event') as any)?.showModal();
                                    }}
                                >
                                    <div>
                                        <img
                                            src={`http://localhost:1337${(event?.imageEvent as any)?.url}`}
                                            alt="All-Access Pass"
                                            className="w-full h-[400px] rounded-lg"
                                        />
                                        <h3 className="text-lg font-bold mt-4">{event.titleEvent}</h3>
                                        <div className="flex-grow"></div>
                                        <div className="text-sm">{displayCustomDate(new Date(event.dateEvent))}</div>
                                    </div>
                                </div>
                            ))}
                            <dialog id="my_modal_event" className="modal *:text-black">
                                <div className="modal-box h-full max-w-6xl">
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="w-full">
                                            {event ? (
                                                <h2 className="text-3xl font-bold mb-4 text-center">{event.titleEvent}</h2>
                                            ) : (
                                                <h2 className="text-3xl font-bold mb-4 text-center">Bài viết không tồn tại</h2>
                                            )}
                                            <div className='flex justify-between'>
                                                <div className='flex'>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="w-full ">
                                        <img
                                            src={`http://localhost:1337${(event?.imageEvent as any)?.url}`}
                                            alt="Kitten with bubbles"
                                            className="rounded-lg shadow-lg w-full h-[400px]"
                                        />
                                    </div>
                                    <div className="mt-8">
                                        <div className="w-full ">
                                            <h2 className="text-3xl font-bold mb-4">NỘI DUNG SỰ KIỆN</h2>
                                            <p className="text-gray-700 leading-relaxed">
                                                <ReactMarkdown>{event?.contentEvent || ''}</ReactMarkdown>
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p></p>
                                            <Link to="/booking" className="btn bg-[#0d74b1] mt-3 ">Booking now</Link>
                                        </div>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="PetNew"
                        defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {news.map((newSet: INew) => (
                            <div className="bg-gray-100 p-6 rounded-lg mx-auto">
                                <div className="flex justify-center">
                                    <img
                                        src={`http://localhost:1337${(newSet?.imageNew as any)?.url}`}
                                        alt="Article banner"
                                        className="w-[1300px] h-[500px] rounded-lg"
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500 text-sm">
                                        {newSet?.authorNew}
                                    </p>
                                    <h2 className="text-lg font-bold mt-2">
                                        {newSet?.titleNew}
                                    </h2>
                                    <p className="text-gray-700 mt-2 line-clamp-3">
                                        {newSet?.contentNew}
                                    </p>
                                    <button  className="text-blue-500 font-semibold mt-2 inline-block" onClick={() => handleNew(newSet.documentId)}>
                                        Read More »
                                    </button>
                                </div>
                                <hr className="border-2"/>
                            </div>
                        ))}
                    </div>

                    {/* <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab3" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 3
                    </div> */}
                </div>
            </div>

        </div>
    );
};