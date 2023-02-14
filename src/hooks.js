import { useState } from "react";

export function useFormInput(initialValue){
    const [value, setValue]=useState(initialValue);

    function handelChange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handelChange
    }
}