import { useEffect, useState } from 'react'
import '../modalForm.css'

function ModalForm() {
    const [value, setValue] = useState(true)
    const [value2, setValue2] = useState(true)
    const [local, setLocal] = useState({
        contacts: [],
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, email, password} = local
        setLocal(prev => ({
            contacts: [...prev.contacts, {name, email, password}],
            name: '',
            email: '',
            password: ''
        }))
    }

    function handleClose() {
        console.log(local.contacts)
        setValue2(prev => !prev)
    }

    function handleCloseA() {
        setValue(prev => !prev)
    }

    // useEffect((prevState) => {
    //     const saved = localStorage.getItem(`${local.contacts.name}`);
    //     if (saved) {
    //         this.setState({ contacts: JSON.parse(saved) });
    //     }

    //     if (prevState.contacts !== local.contacts) {
    //         localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    //     }
    // })

    return (
        <>
            <form onSubmit={handleSubmit} action="" className={value2 == true ? "form" : "form close"}>
                <h2 className='form-h2'>Sing up</h2>
                <span onClick={handleClose} className='closeModal'>✖</span>

                <div className="form-box">
                    <label className='form-label' htmlFor="username">Username</label>
                    <input className='form-input' value={local.name} onChange={(e) => setLocal(prev => ({
                        ...prev,
                        name: e.target.value
                    }))} required placeholder='Username' type="text" name="" id="username" />
                </div>

                <div className="form-box">
                    <label className='form-label' htmlFor="E-Mail">E-Mail</label>
                    <input className='form-input' value={local.email} onChange={(e) => setLocal(prev => ({
                        ...prev,
                        email: e.target.value
                    }))} required placeholder='E-Mail' type="text" name="" id="E-Mail" />
                </div>

                <div className="form-box">
                    <label className='form-label' htmlFor="Password">Password</label>
                    <input className='form-input' value={local.password} onChange={(e) => setLocal(prev => ({
                        ...prev,
                        password: e.target.value
                    }))} required placeholder='Password' type="password" name="" id="Password" />
                </div>

                <button type='submit' className="form-btn">Sing up</button>

                <p className='form-p'>Already have an account? <a onClick={handleCloseA} className='form-a'>Log In!</a></p>
            </form>

            <form action="" className={value == true ? "form2 close" : "form2 open"}>
                <h2 className='form-h2'>Log in</h2>
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

                <button className="form-btn">Log in</button>

                <p className='form-p'>Don't have an account? <a onClick={handleCloseA} className='form-a'>Sing up!</a></p>
            </form>
        </>
    )
}

export default ModalForm