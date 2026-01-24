import { useRef, useState } from 'react'
import '../modalForm.css'

function ModalForm() {
    const [value, setValue] = useState(true)
    const Form = useRef()
    const Form2 = useRef()

    function handleClose() {
        Form.current.classList.toggle('close')
    }

    function handleCloseA(){
        setValue(false)
    }

    return (
        <>
            <form ref={Form} action="" className={value == true ? "form" : "form close"}>
                <h2 className='form-h2'>Sing up</h2>
                <span onClick={handleClose} className='closeModal'>✖</span>

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

                <p className='form-p'>Already have an account? <a onClick={handleCloseA} className='form-a' href="#">Log In</a></p>
            </form>

            <form ref={Form2} action="" className={value == true ? "form2 close" : "form2 open"}>
                <h2 className='form-h2'>Sing up</h2>
                <span onClick={handleClose} className='closeModal'>✖</span>

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

                <p className='form-p'>Don't have an account? <a onClick={handleClose} className='form-a' href="#">Sing up!</a></p>
            </form>
        </>
    )
}

export default ModalForm