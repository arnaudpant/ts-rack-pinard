export interface FormsType {
    errors: any, 
    control : any, 
    register : any, 
    handleSubmit: any, 
    onSubmit: any,
    isLoading: boolean
}

export interface RegisterFormType {
    email: string,
    password: string
}

export interface LoginFormType {
    email: string,
    password: string
}