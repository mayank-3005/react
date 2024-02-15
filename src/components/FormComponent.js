import React from 'react';


const FormComponent = () => {
    return (
        <div className="container grid md:grid-cols-2 ">
            <div className="grid1">
                <h2>Hours Of Opration</h2>
                <div className='one-opration'>
                <h2>MON - FRI</h2>
                <p>10:00am - 1:00 pm</p>
                <p>4:00pm - 10:00 pm</p>
                </div>
                <div className='two-opration'>
                <h2>SAT</h2>
                <p>3:00pm - 10:30 pm</p>
               
                </div>
                <div className='third-opration'>
                <h2>SUN</h2>
                <p>We are closed</p>
               
                </div>
                
                <button>MAKE A RESERVATION</button>
            </div>
            
            <div className="grid2">
                <div>
                    <h3>Drop Us a Line</h3>
                    <h4>ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit</h4>
                    <button>CONTACT US</button>
                </div>
                
                <div>
                    <h3>Our Newsletter</h3>
                    <h4>ipsum dolor sit amet, consectetur adipiscing</h4>
                    <form>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <button>CONTACT US</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormComponent;





