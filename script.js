function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
         var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
           genero = 'Homem'
            if (idade >=0 && idade < 3){
                img.setAttribute('src', 'luffybaby.jpeg')
            } else if(idade < 14){
                img.setAttribute('src', 'luffykid.jpeg')
            } else if(idade < 30){
                img.setAttribute('src', 'luffyado.jpeg')
            } else if(idade < 50){
                img.setAttribute('src', 'luffyadu.jpeg')
            } else{
                img.setAttribute('src', 'luffyvei.jpeg')
            } 
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 3){
                img.setAttribute('src', 'robinbaby.jpeg')
            } else if(idade < 14){
                img.setAttribute('src', 'robincriança.jpeg')
            } else if(idade < 30){
                img.setAttribute('src', 'robinjv.jpeg')
            } else if(idade < 50){
                img.setAttribute('src', 'robinadulta.jpeg')
            } else{
                img.setAttribute('src', 'robinvelha.jpeg')
            }
        }
        res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
            res.appendChild(img)
    }
}