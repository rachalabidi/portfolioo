import React, { Component } from 'react';
import './style/Contact.css';

class Formu extends Component {
    handleSubmit = async (event) => {
        event.preventDefault();
    
        // Extract form data
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
    console.log(message);
        // Example of form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
    
        try {
            // Example of sending form data to Formcarry
            const response = await fetch('https://formcarry.com/s/DKkPixXL88J', {
                method: 'POST',
                headers: { 
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ name, email, message })
                });
    
            if (response.ok) {
                // If the submission was successful, display a success message
                alert('Message sent successfully!');
            } else {
                // If there was an error, display an error message
                alert('Error sending message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            // Display an error message
            alert('Error sending message. Please try again later.');
        }
    }
    
    render() {
        return (
            <div>
               <div className="container">
            <div className="blur-container">
                {/* Left Section - Contact Form */}
                <div className="left-section">
                    <h2>Get in Touch </h2>
                 

                    <form id="contact-form" className="contact-form" role="form" onSubmit={this.handleSubmit}> 
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Name" name="name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                {/* Right Section - Image */}
                <div className="right-section">
                    <img src={require("./Contact us-rafiki.png")} alt="Your Image" />
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Formu;