import { useState } from "react";

const useInput = (init) => {
    const [value, setValue] = useState(init);

    const onChange = (e='') => e ? setValue(e.target.value) : setValue('');

    return {
        value,
        onChange,
    };
};

export default useInput;
