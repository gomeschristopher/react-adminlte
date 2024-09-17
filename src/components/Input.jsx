import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, error, icon, ...props }, ref) {
    return (
        <>
            {label && (
                <label className="form-label">{label}</label>
            )}
            <div className="input-group">
                {textarea ? (
                    <textarea ref={ref} className="form-control" {...props} />
                ) : (
                    <input ref={ref} className="form-control" {...props} />
                )}
                {icon && (
                    <div className="input-group-text">
                        <span className={icon}></span>
                    </div>
                )}
                {error && (
                    <div className="invalid-feedback d-block">
                        {error}
                    </div>
                )}
            </div>
        </>
    )
})

export default Input;