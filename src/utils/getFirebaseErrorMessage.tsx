import errors from './errors.json'

type FirebaseErrorType = {
    [key: string]: string
}
type FirebaseError = {
    [key: string]: FirebaseErrorType
}

const firebaseErrors: FirebaseError  = {
    ...errors,
    an_unknown_error_has_occurred: {
        an_unknown_error_has_occurred: errors.an_unknown_error_has_occurred
    }
}

export function getFirebaseErrorMessage (method: string, errorCode: string): string {
    const defaultErrorMessage = errors.an_unknown_error_has_occurred

    if (!firebaseErrors[method]) {
        return defaultErrorMessage
    }
    if (!firebaseErrors[method][errorCode]) {
        return defaultErrorMessage
    }

    const errorMessage = firebaseErrors[method][errorCode]

    return errorMessage
};
