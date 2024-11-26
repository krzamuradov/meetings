export const useHelpers = () => {
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);

        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'UTC',
        };

        const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
        return formattedDate;
    };

    return { formatDate };
};
