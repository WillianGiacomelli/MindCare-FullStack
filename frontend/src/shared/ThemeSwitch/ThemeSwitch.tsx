import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
       setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (
    <>
        <span className='d-none d-md-flex align-items-center justify-content-between gap-2'>
            <i className="bi bi-sun"></i>
                <div className="ms-1 form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={() => toggleTheme()}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                </div>
            <i className="bi bi-moon"></i>  
        </span>
    </>
  )
}

export default ThemeSwitch
