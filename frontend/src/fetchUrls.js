// fetchUrls.js

export const apiBaseUrl = 'http://localhost:5000/api'; // Modifica questo con l'URL del tuo backend

export const getMeUrl = `${apiBaseUrl}/profile/me`;
export const getProfileUrl = `${apiBaseUrl}/profile`;
export const putProfileUrl = `${apiBaseUrl}/profile`;

// URL per login e registrazione
export const loginUrl = 'http://localhost:5000/auth/login';
export const registerUrl = 'http://localhost:5000/auth/register';
export const meUrl = 'http://localhost:5000/auth/me';

export const login = async (formValue) => {
    try {
        const res = await fetch(loginUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formValue)
        });
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            const errorData = await res.json();
            return { error: errorData.message };
        }
    } catch (error) {
        return { error: error.message };
    }
};

export const register = async (regFormValue, avatar) => {
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('name', regFormValue.name);
    formData.append('surname', regFormValue.surname);
    formData.append('email', regFormValue.email);
    formData.append('password', regFormValue.password);
    /* formData.append('age', regFormValue.age); */

    try {
        const res = await fetch(registerUrl, {
            method: 'POST',
            body: formData
        });
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            const errorData = await res.json();
            return { error: errorData.message };
        }
    } catch (error) {
        return { error: error.message };
    }
};

export const me = async () => {
    const res = await fetch(meUrl, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
    if (!res.ok) {
        throw new Error(res.status);
    }
    const data = await res.json();
    return data;
};
