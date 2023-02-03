const submitData = (name, email) => {

	return fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({ name: name, email: email })
	})
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
			throw new Error(res.status)
		})
		.then((data) => {return data})
		.catch((error) => {
			document.body.append(error)
		})
}
