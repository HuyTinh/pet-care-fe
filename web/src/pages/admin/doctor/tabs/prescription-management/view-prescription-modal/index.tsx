import { IPet } from "../../../../../../types/pet.type"
import { IDetail, IPrescription } from "../../../../../../types/prescription.type"
import { displayCustomDate } from "../../../../../../utils/date"

type ViewPrescriptionModalProps = {
    prescription: IPrescription
}


export const ViewPrescriptionModal = ({ prescription }: ViewPrescriptionModalProps) => {

    let { appointment, details } = prescription || {}

    return (
        <dialog id="view_prescription_modal" className="modal">
            <div className="modal-box max-w-2xl">
                <h3 className="font-bold text-xl text-center">Presctiption</h3>
                <p className="py-4">
                    <div>
                        <div className="divider divider-start font-bold underline">Appointment</div>
                        <div className="grid grid-cols-2 gap-1 px-2">
                            <div>Customer: <span className="font-bold">{appointment?.first_name + " " + appointment?.last_name}</span></div>
                            <div>Email: <span className="font-bold">{appointment?.email}</span></div>
                            <div>Phone number: <span className="font-bold">{appointment?.phone_number}</span></div>
                            <div>Booking Date: <span className="font-bold">{displayCustomDate(new Date(appointment?.appointment_date))}</span></div>
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
                </p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
