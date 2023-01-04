const buttons = document.querySelectorAll('button')
const code = document.querySelector('code')
buttons.forEach(button => button.addEventListener('click', e => {
    const lang = e.target.textContent
        .replace('-', '')
        .replace('#', 'sharp')
        .replace(/\s/g, '')
        .trim()
        .toLowerCase()
    fetch(`/hello-from-${lang}`)
        .then(res => {
            if(res.ok) return res.text()
            throw 'Не удалось получить ответ от сервера!'
        })
        .then(txt => code.textContent = txt)
        .catch(err => code.textContent = err)
    
}))
