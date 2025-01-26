import React, { useState } from "react";

export default function Dropdown() {
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [selectedOptions, setSelectedOptions] = useState([]); // Track selected options

    const options = [
        { id: "fashion", label: "Fashion" },
        { id: "digital-marketing", label: "Digital Marketing" },
        { id: "architecture", label: "Architecture" },
        { id: "product-design", label: "Product Design" },
        { id: "advertising", label: "Advertising" },
        { id: "photography", label: "Photography" },
        { id: "graphic-design", label: "Graphic Design" },
    ];

    const handleOptionToggle = (optionId) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(optionId)
                ? prevSelected.filter((id) => id !== optionId)
                : [...prevSelected, optionId]
        );
    };

    const handleApply = () => {
        console.log("Selected Options:", selectedOptions);
        setOpenDropdown(null); // Close the dropdown after applying
    };

    const toggleDropdown = (dropdownId) => {
        setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
    };

    return (
        <div className="lnding-drop-row d-flex">
            {["Theme", "Industries", "Device", "Page Type"].map((label, index) => (
                <div className="lnding-drop" key={index}>
                    {/* Dropdown Header */}
                    <div
                        className="main-dd-div bg222"
                        onClick={() => toggleDropdown(index)}
                    >
                        <div className="dd-border-div">
                            <div className="dd-border-text-icon d-flex align-items-center justify-content-between">
                                <p className="dd-text color9ea fs-16 m-0 fw-normal">{label}</p>
                                <i
                                    className={`fas fa-chevron-${
                                        openDropdown === index ? "up" : "down"
                                    } dd-icon`}
                                ></i>
                            </div>
                        </div>
                    </div>
                    {/* Dropdown Options */}
                    {openDropdown === index && (
                        <div className="dd-dropdown">
                            <div className="filter-container">
                                {options.map((option) => (
                                    <div className="filter-item" key={option.id}>
                                        <input
                                            type="checkbox"
                                            id={option.id}
                                            checked={selectedOptions.includes(option.id)}
                                            onChange={() => handleOptionToggle(option.id)}
                                        />
                                        <label htmlFor={option.id}>{option.label}</label>
                                    </div>
                                ))}
                                <button className="apply-button" onClick={handleApply}>
                                    Apply
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
