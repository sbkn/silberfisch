export function required(value) {
    return !value ? ['This field cannot be empty'] : [];
}

export function url(value) {
    return value && !(value.indexOf(".") > -1) ? ['This URL is invalid'] : [];
}

export function email(value) {
    return value && !(value.indexOf("@") > -1) ? ['This email address is invalid'] : [];
}