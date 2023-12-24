const userName = document.getElementById('name');
const userPassword = document.getElementById('password');
const Btn = document.getElementById('signin');


Btn.addEventListener('click', () => {

    const data = {
        username: userName.value,
        password: userPassword.value
    }

    axios({
        method: 'post',
        url: `${local_server}/api/Signin/`,
        data,
    }).then((response) => {
        if(response.data.access){
            localStorage.setItem('token', response.data.access)
            window.open(`${local_server}/dashboard/`)
        }
    }).catch((error)=> {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Please check your username or password"
        })
      })
    })


