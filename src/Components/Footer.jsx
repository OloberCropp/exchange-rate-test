import React from 'react'

const Footer = () => {
    return (
        <footer className='container'>

            <h3>Test project for "Egorov Agency"</h3>

            <div className="footer__contacts">

                <span>

                    <label>Telegram</label>
                    <h3 className='contact'>@InNomeneDeorum</h3>
                </span>

                <span>
                    <label>Phone Number:</label>
                    <h3 className='contact'>+375(29)547-17-64</h3>
                </span>

                <span>
                    <label>Email:</label>
                    <h3 className='contact'>OliverCropp1966@gmaill.com</h3>
                </span>
                    
            </div>
        </footer>
    )
}

export default Footer
