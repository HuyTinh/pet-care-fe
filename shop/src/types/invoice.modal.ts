export interface IInvoice {
    id: number;
    customer_id: number;
    total: number;
    orderDate: Date;
    status: InvoiceStatus;
}
export enum InvoiceStatus {
    PENDING = "PENDING",
    PAID = "PAID"
}