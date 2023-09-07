import React from 'react'

const Home = () => {
    return (
        <div className='my-2 mx-2'>
        <div style={{textAlign:'center'}}>
            <p>Menü için yukarıdan menü sayfasına geçebilirsiniz.</p>
            <hr className='mx-4'/>
            <p>dilerseniz buradan da geçebilirsiniz <a href="/menu"><i class="bi bi-signpost"></i>Menu</a></p>
        </div>
        </div>
    )
}

export default Home