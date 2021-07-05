const Logout = () => {
    document.cookie = 'token=;'
    document.location.href = '/';

    return null;
}

export default Logout;