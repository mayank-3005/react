
const Hero = () =>{
    return(
        <div style={{ 
            backgroundImage: `url(https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '420px', 
            position: 'relative', 
            textAlign: 'center', 
            paddingTop: '100px',
            paddingBottom :'100px'
            
        }}>
            <h1 className="heading">Only Quality Food</h1>
            <p className="paragraph">This is the text overlaid on the background image.</p>
            <p className="paragraph">Text ever since the 1500s, when an unknown printer took a galley.</p>
            <p className="paragraph">Text ever since the 1500s, when an unknown printer took a galley.</p>
            <div style={{ marginTop: '20px' }}> 
                <button className="button" style={{ marginRight: '10px' }}>VIEW MENU</button>
                <button className="button">RESERVATION</button>
            </div>
        </div>
    );
    
}
export default Hero;