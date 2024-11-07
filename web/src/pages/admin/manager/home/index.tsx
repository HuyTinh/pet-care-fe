import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { PetInformationModal } from '../modal/pet';
import { AppointmentModal } from '../modal/appointment';
import { PrescriptionModal } from '../modal/prescription';

export const HomeManager = () => {
    const appointmentData = [
        {
            name: '9:00:00',
            appointment: 40,

        },
        {
            name: '11:00:00',
            appointment: 30,

        },
        {
            name: '13:00:00',
            appointment: 20,

        },
        {
            name: '15:00:00',
            appointment: 10,

        },
    ];
    const managerData = [
        {
            name: 'Customers',
            customers: 40,

        },
        {
            name: 'Appointments',
            appointments: 200,

        },
        {
            name: 'Invoices',
            invoices: 100,

        },
    ];
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                    <p className="text-medium text-lg text-white">{label}</p>
                    <p className="text-sm text-blue-400">
                        Appointment:
                        <span className="ml-2">{payload[0].value}</span>
                    </p>
                </div>
            );
        }
    };
    const CustomTooltip1 = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                    <p className="text-medium text-lg text-white">{label}</p>
                    <p className="text-sm text-blue-400">
                        Total:
                        <span className="ml-2">{payload[0].value}</span>
                    </p>
                </div>
            );
        }
    };
    return (
        <div className="h-[100%] w-full mt-28 bg-slate-200 ">
            <div className="flex flex-row  w-full ">
                <div className="w-2/3 ">
                    <div className="flex mt-7 space-x-4 px-5 ">
                        <div className="card w-96 shadow-xl bg-gray-100">
                            <div className="card-body text-[#0099CF]">
                                <h2 className="card-title justify-center text-2xl -mt-3">Customers</h2>
                                <div className="flex flex-row mt-1 ">
                                    {/* Thêm wrapper tròn cho ảnh */}
                                    <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#0099CF] rounded-full">
                                        <img src="/src/assets/images/rating.png" className="w-12 h-12 z-10" />
                                    </div>
                                    <div className="flex flex-col ml-7">
                                        <p>
                                            <span className="text-lg font-bold">Total: </span>30
                                        </p>
                                        <p className="mt-2 font-semibold">
                                            Today
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl bg-gray-100">
                            <div className="card-body text-[#0099CF]">
                                <h2 className="card-title justify-center text-2xl -mt-3">Appointments</h2>
                                <div className="flex flex-row mt-1 ">
                                    {/* Thêm wrapper tròn cho ảnh */}
                                    <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#0099CF] rounded-full">
                                        <img src="/src/assets/images/appointment.png" className="w-12 h-12 z-10" />
                                    </div>
                                    <div className="flex flex-col ml-7">
                                        <p>
                                            <span className="text-lg font-bold">Total: </span>30
                                        </p>
                                        <p className="mt-2 font-semibold">
                                            Today
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl bg-gray-100">
                            <div className="card-body text-[#0099CF]">
                                <h2 className="card-title justify-center text-2xl -mt-3">Invoices</h2>
                                <div className="flex flex-row mt-1 ">
                                    <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#0099CF] rounded-full">
                                        <img src="/src/assets/images/invoice.png" className="w-12 h-12 z-10" />
                                    </div>
                                    <div className="flex flex-col ml-7">
                                        <p>
                                            <span className="text-lg font-bold">Total: </span>30
                                        </p>
                                        <p className="mt-2 font-semibold">
                                            Today
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 w-full px-5 h-96">
                        <div className="flex flex-row w-full space-x-5 h-full">
                            <div className="w-1/2 bg-white px-7 py-7 rounded-lg">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={appointmentData}
                                        margin={{
                                            right: 30,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend />
                                        <Bar dataKey="appointment" fill="#020189" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-1/2 bg-white px-7 py-7 rounded-lg">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={managerData}
                                        margin={{
                                            right: 10,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip content={<CustomTooltip1 />} />
                                        <Legend />
                                        <Bar dataKey="customers" fill="#078001" barSize={50} />
                                        <Bar dataKey="appointments" fill="#020189" barSize={50} />
                                        <Bar dataKey="invoices" fill="#FEA501" barSize={50} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7 w-full px-7 ' >
                        <span className='text-xl font-bold text-[#0099CF]'>List Appointments Today</span>
                        <div className=" bg-white relative max-h-[10%] overflow-auto mt-3 h-[500px] ">
                            <table className="table border border-gray-300 ">
                                {/* head */}
                                <thead className='sticky top-0 bg-white'>
                                    <tr className="text-lg">
                                        <th></th>
                                        <th>Customer</th>
                                        <th>Hour</th>
                                        <th>Pet</th>
                                        <th>Status</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td >
                                            <div className="flex flex-col truncate">
                                                <span className="font-bold underline">
                                                    Nguyen Van A
                                                </span>
                                                <div className="flex items-center ml-10">
                                                    <span className="justify-center font-bold">X</span>
                                                </div>
                                                <span className="font-bold underline">
                                                    0123456789
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-base font-bold">9:00:00</td>
                                        <td className="text-base font-bold">Success</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    (
                                                        document.getElementById("pet_infomation_modal") as any
                                                    ).showModal()
                                                }
                                            >
                                                <img className='items-center' src="/src/assets/images/Rectangle 100.png" />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    (
                                                        document.getElementById("appointment_modal") as any
                                                    ).showModal()
                                                }
                                            >
                                                <img className='items-center' src="/src/assets/images/Rectangle 86.png" />
                                            </button>

                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td >
                                            <div className="flex flex-col truncate">
                                                <span className="font-bold underline">
                                                    Nguyen Van B
                                                </span>
                                                <div className="flex items-center ml-10">
                                                    <span className="justify-center font-bold">X</span>
                                                </div>
                                                <span className="font-bold underline">
                                                    0123456789
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-base font-bold">9:00:00</td>
                                        <td className="text-base font-bold">Success</td>
                                        <td>
                                            <button>
                                                <img className='items-center' src="/src/assets/images/Rectangle 100.png" />
                                            </button>
                                        </td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 86.png" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td >
                                            <div className="flex flex-col truncate">
                                                <span className="font-bold underline">
                                                    Nguyen Van C
                                                </span>
                                                <div className="flex items-center ml-10">
                                                    <span className="justify-center font-bold">X</span>
                                                </div>
                                                <span className="font-bold underline">
                                                    0123456789
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-base font-bold">9:00:00</td>
                                        <td className="text-base font-bold">Success</td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 100.png" />
                                        </td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 86.png" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td >
                                            <div className="flex flex-col truncate">
                                                <span className="font-bold underline">
                                                    Nguyen Van C
                                                </span>
                                                <div className="flex items-center ml-10">
                                                    <span className="justify-center font-bold">X</span>
                                                </div>
                                                <span className="font-bold underline">
                                                    0123456789
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-base font-bold">9:00:00</td>
                                        <td className="text-base font-bold">Success</td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 100.png" />
                                        </td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 86.png" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td >
                                            <div className="flex flex-col truncate">
                                                <span className="font-bold underline">
                                                    Nguyen Van C
                                                </span>
                                                <div className="flex items-center ml-10">
                                                    <span className="justify-center font-bold">X</span>
                                                </div>
                                                <span className="font-bold underline">
                                                    0123456789
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-base font-bold">9:00:00</td>
                                        <td className="text-base font-bold">Success</td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 100.png" />
                                        </td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 86.png" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td >
                                            <div className="flex flex-col truncate">
                                                <span className="font-bold underline">
                                                    Nguyen Van C
                                                </span>
                                                <div className="flex items-center ml-10">
                                                    <span className="justify-center font-bold">X</span>
                                                </div>
                                                <span className="font-bold underline">
                                                    0123456789
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-base font-bold">9:00:00</td>
                                        <td className="text-base font-bold">Success</td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 100.png" />
                                        </td>
                                        <td>
                                            <img className='items-center' src="/src/assets/images/Rectangle 86.png" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className="w-1/2 px-5 ">
                    <div className='bg-white h-[81%] w-full px-5 mt-7 py-7 !rounded-xl'>
                        <div className='flex flex-row items-center'>
                            <div className="flex items-center justify-center w-[65px] h-[65px] bg-[#0099CF] rounded-full">
                                <img src="/src/assets/images/prescription.png" className="w-10 h-10 z-10" />
                            </div>
                            <span className='ml-3 text-xl font-bold text-[#0099CF]'>List Prescriptions Today</span>
                        </div>
                        <div className=' max-h-[90%] overflow-auto'>
                            <div className='cursor-pointer'>
                                <div className='w-full mt-10 justify-center flex'>
                                    <div className="card w-96 shadow-xl bg-gray-100"
                                        onClick={() =>
                                            (
                                                document.getElementById("prescription_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <div className="card-body text-[#0099CF] ">
                                            <h2 className="card-title text-xl font-bold"># PC001</h2>
                                            <div className="flex flex-row justify-between border-b-2 border-slate-950">
                                                <div className="flex flex-col ml-7">
                                                    <p>
                                                        <span className="text-lg font-bold">Pet name: </span>
                                                        <span>Tom</span>
                                                    </p>
                                                    <p className="mt-2 font-semibold mb-2">
                                                        <span className="text-lg font-bold">Sick: </span>
                                                        <span> Vaccination - Cat</span>
                                                    </p>
                                                </div>
                                                <img src="/src/assets/images/dog.png" className="w-12 h-12 z-10" />
                                            </div>
                                            <div className='mt-2 flex justify-between'>
                                                <span>25-10-2004</span>
                                                <span>Detail</span>
                                                <span className='font-bold'>Dr.Bao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='w-full mt-10 justify-center flex'>
                                    <div className="card w-96 shadow-xl bg-gray-100">
                                        <div className="card-body text-[#0099CF] ">
                                            <h2 className="card-title text-xl font-bold"># PC001</h2>
                                            <div className="flex flex-row justify-between border-b-2 border-slate-950">
                                                <div className="flex flex-col ml-7">
                                                    <p>
                                                        <span className="text-lg font-bold">Pet name: </span>
                                                        <span>Tom</span>
                                                    </p>
                                                    <p className="mt-2 font-semibold mb-2">
                                                        <span className="text-lg font-bold">Sick: </span>
                                                        <span> Vaccination - Cat</span>
                                                    </p>
                                                </div>
                                                <img src="/src/assets/images/dog.png" className="w-12 h-12 z-10" />
                                            </div>
                                            <div className='mt-2 flex justify-between'>
                                                <span>25-10-2004</span>
                                                <span>Detail</span>
                                                <span className='font-bold'>Dr.Bao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='w-full mt-10 justify-center flex'>
                                    <div className="card w-96 shadow-xl bg-gray-100">
                                        <div className="card-body text-[#0099CF] ">
                                            <h2 className="card-title text-xl font-bold"># PC001</h2>
                                            <div className="flex flex-row justify-between border-b-2 border-slate-950">
                                                <div className="flex flex-col ml-7">
                                                    <p>
                                                        <span className="text-lg font-bold">Pet name: </span>
                                                        <span>Tom</span>
                                                    </p>
                                                    <p className="mt-2 font-semibold mb-2">
                                                        <span className="text-lg font-bold">Sick: </span>
                                                        <span> Vaccination - Cat</span>
                                                    </p>
                                                </div>
                                                <img src="/src/assets/images/dog.png" className="w-12 h-12 z-10" />
                                            </div>
                                            <div className='mt-2 flex justify-between'>
                                                <span>25-10-2004</span>
                                                <span>Detail</span>
                                                <span className='font-bold'>Dr.Bao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='w-full mt-10 justify-center flex'>
                                    <div className="card w-96 shadow-xl bg-gray-100">
                                        <div className="card-body text-[#0099CF] ">
                                            <h2 className="card-title text-xl font-bold"># PC001</h2>
                                            <div className="flex flex-row justify-between border-b-2 border-slate-950">
                                                <div className="flex flex-col ml-7">
                                                    <p>
                                                        <span className="text-lg font-bold">Pet name: </span>
                                                        <span>Tom</span>
                                                    </p>
                                                    <p className="mt-2 font-semibold mb-2">
                                                        <span className="text-lg font-bold">Sick: </span>
                                                        <span> Vaccination - Cat</span>
                                                    </p>
                                                </div>
                                                <img src="/src/assets/images/dog.png" className="w-12 h-12 z-10" />
                                            </div>
                                            <div className='mt-2 flex justify-between'>
                                                <span>25-10-2004</span>
                                                <span>Detail</span>
                                                <span className='font-bold'>Dr.Bao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <div className='w-full mt-10 justify-center flex'>
                                    <div className="card w-96 shadow-xl bg-gray-100">
                                        <div className="card-body text-[#0099CF] ">
                                            <h2 className="card-title text-xl font-bold"># PC001</h2>
                                            <div className="flex flex-row justify-between border-b-2 border-slate-950">
                                                <div className="flex flex-col ml-7">
                                                    <p>
                                                        <span className="text-lg font-bold">Pet name: </span>
                                                        <span>Tom</span>
                                                    </p>
                                                    <p className="mt-2 font-semibold mb-2">
                                                        <span className="text-lg font-bold">Sick: </span>
                                                        <span> Vaccination - Cat</span>
                                                    </p>
                                                </div>
                                                <img src="/src/assets/images/dog.png" className="w-12 h-12 z-10" />
                                            </div>
                                            <div className='mt-2 flex justify-between'>
                                                <span>25-10-2004</span>
                                                <span>Detail</span>
                                                <span className='font-bold'>Dr.Bao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PetInformationModal />
                <AppointmentModal />
                <PrescriptionModal />
            </div>
        </div>
    )
}
