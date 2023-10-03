const localeObject = {
  name: 'nl',
  weekdays: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
  weekdaysShort: ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vrij', 'Zat'],
  weekdaysMin: ['Zo', 'Maa', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
  months: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  weekStart: 0,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  ordinal: (n) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return `[${n}${(s[(v - 20) % 10] || s[v] || s[0])}]`;
  },
  buttonValidate: 'Oke',
  buttonCancel: 'Annuleren',
  rangeHeaderText: 'Van %d Tot %d',
};

export default localeObject;
