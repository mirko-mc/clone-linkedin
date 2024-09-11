export const getMeUrl = 'https://striveschool-api.herokuapp.com/api/profile/me'

export const getProfileUrl = 'https://striveschool-api.herokuapp.com/api/profile'
// getProfileUrl si può usare anche per ottenere l'elenco delle esperienze così:
// GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences

// getProfileUrl si può usare anche per scrivere una nuova esperienza così:
// POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences

export const putProfileUrl = 'https://striveschool-api.herokuapp.com/api/profile'


export const login = async (formValue) => {
    try {
        const res = await fetch('http://localhost:5000/api/v1/auth/login', { //DA METTERE LE GIUSTE URL
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formValue)
        })
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
}


export const me = async () => {
    const res = await fetch('http://localhost:5000/api/v1/auth/me',  //DA METTERE LE GIUSTE URL
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    );
    if (!res.ok) {
        throw new Error(res.status);
    }
    const data = await res.json();
    return data;
}

export const register = async (regFormValue, avatar) => {
    const formData = new FormData()
    formData.append('avatar', avatar)
    formData.append('name', regFormValue.name)
    formData.append('surname', regFormValue.surname)
    formData.append('email', regFormValue.email)
    formData.append('password', regFormValue.password)
    formData.append('età', regFormValue.eta)
    /* console.log(formData) */
    try {
        const res = await fetch('http://localhost:5000/api/v1/auth/register', { //DA METTERE LE GIUSTE URL
            method: 'POST',
            body: formData
        })
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }

}