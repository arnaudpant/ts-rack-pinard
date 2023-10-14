export interface FormsType {
    errors: any, 
    control : any, 
    register : any, 
    handleSubmit: any, 
    onSubmit: any,
    isLoading: boolean
}

export interface RegisterFormType {
    login: string,
    email: string,
    password: string
}
export interface ConnexionFormType {
    email: string,
    password: string
}

export interface ForgetFormType {
    email: string,
}