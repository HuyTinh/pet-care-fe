import { useRef } from "react"
import { IDetail, IPrescription } from "../../../../../../types/prescription.type"
import { displayCustomDate } from "../../../../../../utils/date"
import { useReactToPrint } from 'react-to-print';

type ViewPrescriptionModalProps = {
    prescription: IPrescription
}


export const ViewPrescriptionModal = ({ prescription }: ViewPrescriptionModalProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef, pageStyle: "p-10" });

    let { appointment, details } = prescription || {}

    let medicines = details?.map((val) => val.medicines).flat(Infinity)


    return (
        <dialog id="view_prescription_modal" className="modal">
            <div className="modal-box max-w-2xl">
                <div ref={contentRef}>
                    <h3 className="font-bold text-xl text-center">Presctiption</h3>
                    <p className="py-4">
                        <div>
                            <div className="divider divider-start font-bold underline">Appointment</div>
                            <div className="grid grid-cols-2 gap-1 px-2">
                                <div>Customer: <span className="font-bold">{appointment?.first_name + " " + appointment?.last_name}</span></div>
                                <div>Email: <span className="font-bold">{appointment?.email}</span></div>
                                <div>Phone number: <span className="font-bold">{appointment?.phone_number}</span></div>
                                <div>Booking Date: <span className="font-bold">{displayCustomDate(new Date(appointment?.appointment_date))}, {appointment?.appointment_time}h</span></div>
                            </div>
                        </div>
                        <div>
                            <div className="divider divider-start font-bold underline">Pets</div>
                            <div className="px-2">
                                {
                                    details?.map((val: IDetail, index: number) =>
                                        <div>
                                            <div className="flex justify-between" key={index}>-
                                                <span>Name: <span className="font-bold">{val.pet.name}</span></span>|
                                                <span>Age: <span className="font-bold">{val.pet.age}</span></span>|
                                                <span>Weight: <span className="font-bold">{val.pet.weight}</span></span>|
                                                <span>Species: <span className="font-bold">{val.pet.species}</span></span>
                                            </div>
                                            <div>+ Diagnosis: <span className="font-bold underline">{val.diagnosis}</span></div>
                                            <div>+ Note: <span className="italic">{val.note}</span></div>
                                        </div>)
                                }

                            </div>
                        </div>
                        <div>
                            <div className="divider divider-start font-bold underline">Services</div>
                            <div className="px-2">
                                <div className="overflow-x-auto  border rounded-xl">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                appointment?.services?.map((val: any, index: number) =>
                                                    <tr key={index}>
                                                        <th>#{index + 1}</th>
                                                        <td>{val.name}</td>
                                                        <td>{val.price.toLocaleString()}</td>
                                                    </tr>)
                                            }
                                            <tr >
                                                <th>Toltal Money:</th>
                                                <td></td>
                                                <td>{appointment?.services?.reduce((sum, val) => (val as any).price + sum, 0).toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="divider divider-start font-bold underline">Medicines</div>
                            <div className="px-2">
                                <div className="overflow-x-auto  border rounded-xl">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Calculate Unit</th>
                                                <th>Total Money</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                medicines?.map((val: any, index: number) =>
                                                    <tr key={index}>
                                                        <th>#{val.id}</th>
                                                        <td>{val.name}</td>
                                                        <td>{val.quantity}</td>
                                                        <td>{val.calculate_unit}</td>
                                                        <td>{val.total_money.toLocaleString()}</td>
                                                    </tr>)
                                            }
                                            <tr >
                                                <th>Toltal Money:</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{medicines?.reduce((sum, val) => sum + (val as any).total_money, 0).toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </p>
                </div>
                <div className="flex justify-end">
                    <button className="btn" onClick={() => reactToPrintFn()}>Print</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
