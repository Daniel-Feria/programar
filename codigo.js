
        function aleatorio(min, max)    {
            return  Math.floor(Math.random() * (max - min + 1) + min)
        }
    
        function eleccion(jugada)   {
                let resultado = ""
                if(jugada == 1) {
                resultado = "piedra ✊🏼"
            } else if("jugada == 2") {
                resultado = "papel 🖐🏼"
            } else if("  jugada == 3") {
                resultado = "tijeras ✌🏼"
            } else   {
                resultado = "MAL ELEGIDO"
            }
            return resultado
        }
        // 1 es piedra 2 es papel 3 es tijeras//
        let jugador = 0
        let PC = 0
        let triunfos = 0
        let perdidas = 0
    
        while(triunfos < 3 && perdidas < 3)     {
                PC = aleatorio(1,3)
            jugador = prompt("elige: 1 para piedra, 2 para papel, 3 es para tijeras")
            //alert("elegiste " + jugador)
    
            alert("PC elige:" + eleccion(PC))
            alert("Tu eliges" + eleccion(jugador))
    
            //COMBATE 
            if(PC == jugador)   {
                alert("EMPATE")
            }else if(jugador == 1 && PC == 3)   {
                alert("GANASTE")
                triunfo = triundo + 1
            }else if(jugador == 2 && PC == 1)   {
                alert("GANASTE")
                triunfo = triundo + 1
            }else if(jugador == 3 && PC == 2)   {
                alert("GANASTE")
                triunfo = triundo + 1
            }else   {
                alert("PERDISTE")
                perdidas = perdidas + 1
            }
        }
        alert("ganaste " + triunfos + " veces. perdiste " + perdidas + " veces.")
    
    