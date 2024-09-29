import { Pet } from "../pet/Pet.type";

export interface AppointmentDetail{
    appointmentId: string;
    pets: Pet[],
    totalPriceInAppointmentDetail: number;
    createDate: string;
}