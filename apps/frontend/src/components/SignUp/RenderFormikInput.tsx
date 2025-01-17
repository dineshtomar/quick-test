import { FormikInput } from "../Common/FormikInput";
import { InputFieldProps } from "../Utils/interfaces/userObject";

export const RenderFormikInputs = (fields: Array<InputFieldProps>) => {
    return fields.map((field) => (
        <div key={field.name}>
            <FormikInput
                type={field.type}
                name={field.name}
                label={field.label}
                {...(field.validation ? { validation: field.validation } : {})}
            />
        </div>
    ));
}