const didClickDownload = () => {
    fetch("http://127.0.0.1:5000/download").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}