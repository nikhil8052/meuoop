import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    
    <>
    <div class="header">
        <div class="logo">
            Meuooop
            <span>Upload UX Flow</span>
        </div>
        <div class="buttons">
            <button class="preview">Preview</button>
            <button class="save-draft">Save Draft</button>
            <button class="publish">Publish</button>
        </div>
    </div>
    <div class="upload_flow_container">
        <div class="upload-icon">
            <Image height={100} width={100} src='/images/upload_icon.svg'/>
        </div>
        <div class="input-group mb-2">
            <input type="text" placeholder="App Name"/>
            <input type="text" placeholder="Description"/>
        </div>
        <div class="search-group mb-2 ">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search apps or flows"/>
            </div>
            <div class="categories">
                <div class="category active">WhatApps</div>
                <div class="category inactive">Tik Tok</div>
                <div class="category inactive">Instagram</div>
                <div class="category inactive">In Drive</div>
                <div class="category inactive">Google </div>
            </div>
        </div>
        <button class="next-button">Save </button>
    </div>
    </>
  )
}
