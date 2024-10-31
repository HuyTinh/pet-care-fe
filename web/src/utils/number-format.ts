export function toCurrency(amount: number){
    return new Intl.NumberFormat("vi-VN", {}).format(
        amount
    )
}
