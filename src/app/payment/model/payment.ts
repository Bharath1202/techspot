export class Payment {
    _id: any;
    firstName: string;
    lastName: string;
    paymentAddress: PaymentAddress
    paymentMethod: PaymentMethod
}

export class PaymentAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}
export class PaymentMethod {
    cardName: string;
    cardNumber: string;
    expiryDate: Date;
    cvv: number;
}