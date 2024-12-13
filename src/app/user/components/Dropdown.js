import React, { useState } from "react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
    const [selectedOptions, setSelectedOptions] = useState([]); // State to track selected options

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
        // Toggle the checkbox selection
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(optionId)
                ? prevSelected.filter((id) => id !== optionId)
                : [...prevSelected, optionId]
        );
    };

    const handleApply = () => {
        // Log or use the selected options
        console.log("Selected Options:", selectedOptions);
        setIsOpen(false); // Close the dropdown
    };

    return (
        <>
            {/* Dropdown Header */}
            <div
                className="main-dd-div bg222"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className="dd-border-div">
                    <div className="dd-border-text-icon d-flex align-items-center justify-content-between">
                        <p className="dd-text color9ea fs-16 m-0 fw-normal">Theme</p>
                        <i
                            className={`fas fa-chevron-${
                                isOpen ? "up" : "down"
                            } dd-icon`}
                        ></i>
                    </div>
                </div>
            </div>

            {/* Dropdown Options */}
            {isOpen && (
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
        </>
    );
}
