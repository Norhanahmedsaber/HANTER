export const Errors = {
    error0: 0,
    error1: 1,
    error2: 2
};

export  const errorMessages = {
    [Errors.error0] : 'there is error massege 0',
    [Errors.error1] : 'there is error massege 1',
    [Errors.error2] : 'there is error massege 2'
};

export default function report(error){
    throw new Error(errorMessages[error]);
}