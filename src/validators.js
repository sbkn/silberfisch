export function required(value) {
    return !value ? ['This field cannot be empty'] : [];
}

export function url(value) {
    return value ? ['This URL is invalid'] : [];
}

export function email(value) {
    return value ? ['This email address is invalid'] : [];
}