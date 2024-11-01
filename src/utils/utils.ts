export const dateFormater = (dateToFomate: any) => {
    let [yy, mm, dd] = dateToFomate.split("-");
    return [dd, mm, yy].join("/")
}

export const getDateTimestamp = () => {
    const timestamp = Date.now(); // Obtenir le timestamp actuel
    const date = new Date(timestamp); // Créer un objet Date à partir du timestamp

    // Formater la date en utilisant toLocaleDateString avec les options appropriées
    const formattedDate = date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
    return formattedDate
}