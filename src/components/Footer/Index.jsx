import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.linkedin.com/in/rafael-ara-casanova/'>
            <img src="/img/linkedin.svg" alt='Facebook' />
        </a>
        <a href='https://twitter.com/RafaelAra_C'>
            <img src="/img/twitter.svg" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/rafa_ara/'>
            <img src="/img/instagram.svg" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Rafael Ara</strong>
</footer>
}

export default Footer