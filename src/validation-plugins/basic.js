export function validateName(string) {

    const foo = /^[a-zA-Z]+$/;
    return string && foo.test(string);
}