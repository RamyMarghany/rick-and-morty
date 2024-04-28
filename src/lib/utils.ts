export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const paddedDay = day < 10 ? `0${day}` : `${day}`;
    const paddedMonth = month < 10 ? `0${month}` : `${month}`;
    return `${paddedDay}.${paddedMonth}.${year}`;
}