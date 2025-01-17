
// Base interface for user-related properties
export interface UserBase {
    firstName: string;
    lastName: string;
    email: string;
    org: string;
}

// Extended interface for form-specific properties
export interface SignUpFormValues extends UserBase {
    password: string;
    cnfpassword: string;
    termAndCondition: boolean;
}

// Initial values for the signup form
export const initialSignUpValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    org: "",
    password: "",
    cnfpassword: "",
    termAndCondition: false,
};

// Interface for reusable input field props
export interface InputFieldProps {
    type: string;
    name: keyof SignUpFormValues; // Restrict to valid form field keys
    label: string;
}