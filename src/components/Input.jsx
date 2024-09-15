import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
    return (
        <>
            <label className="form-label">{label}</label>
            {textarea ? <textarea ref={ref} className="form-control" {...props} /> : <input ref={ref} className="form-control" {...props} />}
        </>
    )
})

export default Input;