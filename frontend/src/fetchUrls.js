// fetchUrls.js

export const apiBaseUrl = 'http://localhost:5000/'; 

export const getMeUrl = `${apiBaseUrl}auth/me`;
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
    console.log(formData);
    
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


//FETCH PER LE ESPERIENZE

//chiamiamo tutte le esperienze
export const getAllExps = async (userId) =>{
    try {
        const res = await fetch (apiBaseUrl `/api/v1/${userId}/experiences`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//chiamiamo tutte le esperienze dell'utente loggato
export const getMeExps =async () =>{
    try {
        const res = await fetch (apiBaseUrl `/api/v1/me/experiences`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              }, 
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//creiamo nuova esperienza

export const addExp = async (formValue, expId) => {
    try {
        const res = await fetch (apiBaseUrl `/api/v1/experiences/${expId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
              }, 
              method: 'POST',
              body: JSON.stringify(formValue)
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
} 

//carichiamo l'immagine dell'esperienza

export const patchImage = async (image, expId) =>{
    const formData = new FormData()
    formData.append('image', image)
    try {
        const res = await fetch (apiBaseUrl `/api/v1/experiences/${expId}`, {
            
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              }, 
              method: 'PATCH',
              body: formData
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//modifichiamo l'esperienza
export const editExp = async (formValue, expId) => {
    try {
        const res = await fetch (apiBaseUrl `/api/v1/experiences/${expId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
              }, 
              method: 'PUT',
              body: JSON.stringify(formValue)
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//eliminiamo l'esperienza
export const deleteExperience = async (expId) => {
    try {
        const res = await fetch (apiBaseUrl `/api/v1/experiences/${expId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              }, 
              method: 'DELETE',
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//FETCH PER IL PROFILO

//chiamo tutti i profili 
export const getAllProfiles = async () =>{
    try {
        const res = await fetch (apiBaseUrl `/api/v1/profiles`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//chiamo un profilo specifico
export const getOneProfile = async (userId) =>{
    try {
        const res = await fetch (apiBaseUrl `/api/v1/profiles/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//modifica profilo
export const editProfile = async (formValue, userId) => {
    try {
        const res = await fetch (apiBaseUrl `/api/v1/profiles/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
              }, 
              method: 'PUT',
              body: JSON.stringify(formValue)
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

//modifica foto profilo
export const patchAvatar = async (avatar, userId) =>{
    const formData = new FormData()
    formData.append('avatar', avatar)
    try {
        const res = await fetch (apiBaseUrl `/api/v1/profiles/${userId}/avatar`, {
            
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              }, 
              method: 'PATCH',
              body: formData
        })
        if(!res.ok) throw new Error(res)
        const data = await res.json()
        return data  
    } catch (error) {
        console.log(error) 
    }
}

