<template>
<div class = "conjugacoes">
<h3 id = "tempoVerbal"> {{tempoVerbal}}</h3>
    <ul id = "tentantivasUsuario">
        <li> 
            <span class="pessoa">ich</span>
            <input type="text" name = "ich">
        </li>

        <li> 
            <span class="pessoa">du</span>
            <input type="text" name = "du">
        </li>

        <li> 
            <span class="pessoa">er</span>
            <input type="text" name = "er">
        </li>

        <li> 
            <span class="pessoa">sie</span>
            <input type="text" name = "sie">
        </li>

        <li> 
            <span class="pessoa">es</span>
            <input type="text" name = "es">
        </li>

        <li> 
            <span class="pessoa">wir</span>
            <input type="text" name = "wir">
        </li>

        <li> 
            <span class="pessoa">ihr</span>
            <input type="text" name = "ihr">
        </li>

        <li> 
            <span class="pessoa">sie</span>
            <input type="text" name = "sie">
        </li>

        <li> 
            <span class="pessoa">Sie</span>
            <input type="text" name = "Sie">
        </li>
    </ul>
    </div>
    
</template>

<script>
export default {
    props:["tempoVerbal"]
}
</script>

<style>
div.conjugacoes{
    margin: 15px;
    width: 200px;
}
h3#tempoVerbal{
    text-align: center;
}
input[type="text"]{
    border: 2px solid #6B705C;
      border-radius: 5px;
}
ul#tentantivasUsuario{
    list-style-type: none;
}

ul#tentantivasUsuario li{
display: flex;
justify-content: space-between;
}
</style>

