
import { useState } from 'react';

export function useForm(initialValues) {

    const [formData, setFormData] = useState(initialValues);

    function handleChange(e, mask) {

        const { name, value } = e.target;

        const newValue = mask ? value.replace(/\D/g, "") : value;

        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));

    }

    return {
        formData,
        handleChange
    };
}
