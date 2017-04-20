export const greeting = (age = 0) => {
    if(age > 18)
        return 'Hello!';
    return 'Yo!';
};

export const isTacoTuesday = (day = '') => {
    if(day === 'tuesday')
        return true;
    return false;
};