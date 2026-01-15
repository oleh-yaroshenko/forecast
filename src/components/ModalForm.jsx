import '../modalForm.css'

function ModalForm(){
    return(
        <form action="" className="form">
            <h2 className='form-h2'>Sing up</h2>

            <div className="form-box">
                <label className='form-label' htmlFor="username">Username</label>
                <input className='form-input' required placeholder='Username' type="text" name="" id="username" />
            </div>

            <div className="form-box">
                <label className='form-label' htmlFor="E-Mail">E-Mail</label>
                <input className='form-input' required placeholder='E-Mail' type="text" name="" id="E-Mail" />
            </div>

            <div className="form-box">
                <label className='form-label' htmlFor="Password">Password</label>
                <input className='form-input' required placeholder='Password' type="password" name="" id="Password" />
            </div>

            <button className="form-btn">Sing up</button>

            <p className='form-p'>Already have an account? <a className='form-a' href="#">Log In</a></p>
        </form>
    )
}

export default ModalForm