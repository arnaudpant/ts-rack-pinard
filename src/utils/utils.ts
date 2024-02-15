export const dateFormater = (dateToFomate: any) => {
    let [yy, mm, dd] = dateToFomate.split("-");
    return [dd, mm, yy].join("/")
}