import { useState } from 'react'
import './ModalForm.css'

function ModalForm({ activeForm, onClose, onOpenSignup, onOpenLogin, onAuth }) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [local, setLocal] = useState(() => {
        const saved = localStorage.getItem("contacts");
        return {
            contacts: saved ? JSON.parse(saved) : [],
            name: '',
            email: '',
            password: ''
        };
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, contacts } = local

        const isDuplicate = contacts.some(
            (contact) => contact.name === name && contact.email === email && contact.password === password
        );

        if (isDuplicate) {
            alert(`${name} is already user`);
            return;
        }

        setLocal(prev => {
            const newContacts = [...prev.contacts, { name, email, password }];
            localStorage.setItem("contacts", JSON.stringify(newContacts));
            return {
                ...prev,
                contacts: newContacts,
                name: '',
                email: '',
                password: ''
            };
        });

        onAuth(name)
        onClose()
    }

    const userTrue = (e) => {
        e.preventDefault()

        const { name, email, password } = user

        const contactsFromLS = JSON.parse(localStorage.getItem('contacts')) || []

        const isUserExist = contactsFromLS.some(
            u => u.email === email && u.password === password && u.name === name
        )

        if (isUserExist) {
            alert('Ви увійшли в акаунт')
            onAuth(name)
            onClose()
        } else {
            alert('Немає такого юзера')
        }
        setUser({
            name: '',
            email: '',
            password: ''
        })
    }

    const isSignupOpen = activeForm === 'signup'
    const isLoginOpen = activeForm === 'login'

    return (
        <>
            <div className={`modal ${isSignupOpen ? 'open' : 'close'}`}>
                <form onSubmit={handleSubmit} action="" className="form">
                    <h2 className='form-h2'>Sing up</h2>
                    <span onClick={onClose} className='closeModal'>✖</span>

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

                    <p className='form-p'>Already have an account? <a onClick={onOpenLogin} className='form-a'>Log In</a></p>
                </form>
            </div>

            <div className={`modal ${isLoginOpen ? 'open' : 'close'}`}>
                <form action="" onSubmit={userTrue} className="form">
                    <h2 className='form-h2'>Log in</h2>
                    <span onClick={onClose} className='closeModal'>✖</span>

                    <div className="form-box">
                        <label className='form-label' htmlFor="username">Username</label>
                        <input className='form-input' required value={user.name} onChange={(e) => setUser(prev => ({
                            ...prev,
                            name: e.target.value
                        }))} placeholder='Username' type="text" name="" id="username" />
                    </div>

                    <div className="form-box">
                        <label className='form-label' htmlFor="E-Mail">E-Mail</label>
                        <input className='form-input' required value={user.email} onChange={(e) => setUser(prev => ({
                            ...prev,
                            email: e.target.value
                        }))} placeholder='E-Mail' type="text" name="" id="E-Mail" />
                    </div>

                    <div className="form-box">
                        <label className='form-label' htmlFor="Password">Password</label>
                        <input className='form-input' required value={user.password} onChange={(e) => setUser(prev => ({
                            ...prev,
                            password: e.target.value
                        }))} placeholder='Password' type="password" name="" id="Password" />
                    </div>

                    <button type='submit' className="form-btn">Log in</button>

                    <p className='form-p'>Don't have an account? <a onClick={onOpenSignup} className='form-a'>Sing up!</a></p>
                </form>
            </div>
        </>
    )
}

export default ModalForm
