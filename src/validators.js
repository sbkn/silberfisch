import {validateName} from "./validation-plugins/basic";

export function required(value) {
    return !value ? ['This field cannot be empty'] : [];
}

export function name(value) {
    return !validateName(value) ? ['This name is invalid'] : [];
}

export function email(value) {
    return value && !(value.indexOf("@") > -1) ? ['This email address is invalid'] : [];
}