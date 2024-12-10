import { memo, useRef } from "react"
import { IDetail, IPrescription } from "../../../../../../../../@types/prescription.type"
import { displayCustomDate } from "../../../../../../../../shared/helped/date"
import { useReactToPrint } from 'react-to-print';

type ViewPrescriptionModalProps = {
    prescription: IPrescription
}


export const ViewPrescriptionModal = memo(({ prescription }: ViewPrescriptionModalProps) => {

    console.log(prescription);


    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef, pageStyle: "p-10" });

    const { appointment, details } = prescription || {}

    const medicines = details?.map((val) => val.medicines).flat(Infinity)
    const veterinary_cares = details?.map((val) => val.veterinary_cares).flat(Infinity)

    return (
        <dialog id="view_prescription_modal" className="modal">
            <div className="modal-box max-w-5xl">
                <div ref={contentRef}>
                    <h3 className="font-bold text-xl text-center">Presctiption</h3>
                    <div className="py-4">
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
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between" >-
                                                <span>Name: <span className="font-bold">{val.pet.name}</span></span>|
                                                <span>Age: <span className="font-bold">{val.pet.age}</span></span>|
                                                <span>Weight: <span className="font-bold">{val.pet.weight}</span></span>|
                                                <span>Species: <span className="font-bold">{val.pet.species}</span></span>
                                            </div>
                                            <div>+ Diagnosis: <span className="font-bold underline">{val.diagnosis}</span></div>
                                            <div>+ Medicines:
                                                {
                                                    <div className="overflow-x-auto  border rounded-xl mt-2">
                                                        <table className="table">
                                                            {/* head */}
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Quantity</th>
                                                                    <th>Calculate Unit</th>
                                                                    <th>Total Money</th>
                                                                    <th>Note</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    val.medicines?.map((v: any, index: number) =>
                                                                        <tr key={index}>

                                                                            <td>{v.name}</td>
                                                                            <td>{v.quantity}</td>
                                                                            <td>{v.calculate_unit}</td>
                                                                            <td>{v.total_money.toLocaleString()}</td>
                                                                            <td>
                                                                                {v.note}
                                                                            </td>
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
                                                }
                                            </div>
                                            <div>+ Services:
                                                {
                                                    <div className="overflow-x-auto  border rounded-xl mt-2">
                                                        <table className="table">
                                                            {/* head */}
                                                            <thead>
                                                                <tr>
                                                                    <th >Name</th>
                                                                    <th>Total Money</th>
                                                                    <th>Result</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    val.veterinary_cares?.map((v: any, index: number) =>
                                                                        <tr key={index}>

                                                                            <td className="w-[18rem]">{v.veterinary_care}</td>
                                                                            <td>{v.total_money.toLocaleString()}</td>
                                                                            <td>
                                                                                <td>
                                                                                    <span dangerouslySetInnerHTML={{
                                                                                        __html: v.result
                                                                                    }} />
                                                                                </td>
                                                                            </td>
                                                                        </tr>)
                                                                }
                                                                <tr >
                                                                    <th>Toltal Money:</th>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>{veterinary_cares?.reduce((sum, val) => sum + (val as any).total_money, 0).toLocaleString()}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                }
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
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
})
