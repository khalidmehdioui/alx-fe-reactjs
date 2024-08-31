import { useState } from 'react';



const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '' , password: ''});
    const { username, email, password } = formData;
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        setErrors({});
    };

//----------------------- Validation function---------------
    const validate = () => {
        let tempErrors = {};
        if (!username) tempErrors.username = "Username is required";
        if (!email) tempErrors.email = "Email is required";
        if (!password) tempErrors.password = "Password is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted Successfully", formData);
            // Clear form after submission if needed
            setFormData({ username: '', email: '', password: '' });
            setErrors({});
        }
      }

    

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder='username'
                
            />
            {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
          </div>
          <div>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                placeholder='Email'
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
          <div>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                placeholder='password'
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm ;
