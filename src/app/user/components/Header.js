import React from 'react'

export default function Header() {
    return (
        <>

            {/* Header Section */}
            <header className="main-header">
                <div className="website-logo text-white">Meuooop </div>
                <div className="search-bar">
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                    <input placeholder="Search app screen" type="text" />
                </div>

                <div className="header-actions">
                    <div className='get-pro-and-inspiration'>
                        <button className="getProBTN text-white"> Get Inspiration </button>
                        <button className="getProBTN text-white"> Get Pro </button>

                    </div>
                    <div className='profileSection '>
                        <div className=' profile-image'>
                            <a className="profile" href="#">
                                <img
                                    alt="Profile picture"
                                    height="40"
                                    src="https://storage.googleapis.com/a1aa/image/pWYDB2jvvXIuGpfCgbum4MsnxDZmFOeqp5yw3nTeLdu8UnQnA.jpg"
                                    width="40"
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}
