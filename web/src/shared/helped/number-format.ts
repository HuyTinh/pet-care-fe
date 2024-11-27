// Define the function toCurrency to format a number as currency in Vietnamese locale (VND)
export function toCurrency(amount: number) {
    // Use the Intl.NumberFormat object to format the amount according to the Vietnamese locale (vi-VN)
    return new Intl.NumberFormat("vi-VN", {}).format(
        amount // The number to be formatted
    );
}
