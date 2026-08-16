document.querySelector('.copy')?.addEventListener('click',e=>{navigator.clipboard?.writeText(e.currentTarget.parentElement.innerText.replace('Copy',''));e.currentTarget.textContent='Copied!'})
