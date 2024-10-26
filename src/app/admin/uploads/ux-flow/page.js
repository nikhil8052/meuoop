import React from 'react'

export default function page() {
  return (
    
    <>
    
    <div class="header">
        <div class="logo">
            Meuooop
            <span>ADMIN</span>
        </div>
        <div class="buttons">
            <button class="preview">Preview</button>
            <button class="save-draft">Save Draft</button>
            <button class="publish">Publish</button>
        </div>
    </div>
    <div class="container">
        <div class="upload-icon">
            <i class="fas fa-upload"></i>
        </div>
        <div class="input-group">
            <input type="text" placeholder="App Name"/>
            <input type="text" placeholder="Description"/>
        </div>
        <div class="search-group">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search apps or flows"/>
            </div>
            <div class="categories">
                <div class="category active">App Category</div>
                <div class="category inactive">App Category</div>
                <div class="category inactive">App Category</div>
                <div class="category inactive">App Category</div>
                <div class="category inactive">App Category</div>
            </div>
        </div>
        <button class="next-button">Next</button>
    </div>
    </>
  )
}
