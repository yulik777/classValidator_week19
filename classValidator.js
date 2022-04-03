class Validation {

    static isEmail(str) {
        let email = str.match(
            /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,2})$/
        );
        return email === null ? false : true;
    }

    static isDomain(str) {
        let domain = str.match(/^(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z0-9]{2,63}$/);
        return domain === null ? false : true;
    }

    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    static isPhone(str) {
        let phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
        return phone === null ? false : true;
    }

}

let validator = new Validation();
console.log(Validation.isEmail('yulik777@i.ua'));
console.log(Validation.isDomain('yulik.com'));
console.log(Validation.isDate('03.04.2022'));
console.log(Validation.isPhone('+38 (063) 89-94-991'));