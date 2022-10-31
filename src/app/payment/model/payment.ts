export class Payment {
    _id: any;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    PaymentMethod: PaymentMethod[]
}
export class PaymentMethod {
    cardName: string;
    cardNumber: string;
    expiryDate: Date;
    cvv: number;
}