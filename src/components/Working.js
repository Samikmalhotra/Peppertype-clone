import React from 'react'
import { Link } from 'react-router-dom'

const Working = () => {
    return (
        <div class="how-it-works-wrapper">
            <div class="how-it-works">
            <h1> How it Works </h1>

                <div class="tabs">
                    <div role="tablist" aria-label="Sample Tabs" class="center">
                    <Link to ="/">
                    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0">
                    1. Select the type of content copy you want to create.
                    </button>
                    </Link>
                    <Link to ="/panel2">
                    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
                    2. Enter a few details about your product or business.
                    </button>
                    </Link>
                    <Link to ="/panel3">
                    <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">
                    3. Bookmark or copy from the list of content copies. 
                    </button>
                    </Link>
                </div>
        </div>
        </div>
    </div>
    )
}

export default Working
