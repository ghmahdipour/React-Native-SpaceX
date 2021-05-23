
export const date_time = (input) => {
    let res = input.split("T")
    let date_str = res[0].replace(/-/g, ' ') + "t";
    return date_str
}
export default date_time