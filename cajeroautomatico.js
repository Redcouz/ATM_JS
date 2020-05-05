var d = document.getElementById("pedido");
var h2 = document.getElementById("billetes");
var boton = document.getElementById("okey");
var res = document.getElementById ("R");
var dinero = 0;
var resta = 0;
var papeles = 0;

var bills = [];
bills["b1000"] ="1000.png";
bills["b500"] ="500.png";
bills["b200"] ="200.png";
bills["b100"] ="100.png";
bills["b50"] ="50.png";
bills["b20"] ="20.png";
bills["b10"] ="10.png";
bills["b5"] ="5.png";
bills["b2"] ="2.png";
bills["b1"] ="1.png";

class Billete
{
  constructor (v, c)
  {
    this.valor = v;
    this.cant = c;
    this.imagen = new Image();
    this.imagen.src = bills["b" + this.valor];
  }

  mostrar()
  {
    document.getElementById("billetes").appendChild(this.imagen);
  }

}

var e = [];

var caja = []
  {
    caja.push(new Billete (1000, 15));
    caja.push(new Billete (500, 25));
    caja.push(new Billete (100, 25));
    caja.push(new Billete (50, 50));
    caja.push(new Billete (20, 50));
    caja.push(new Billete (10, 100));
    caja.push(new Billete (5, 100));
    caja.push(new Billete (2, 200));
    caja.push(new Billete (1, 200));
  }

var total = 0;

for ( x of caja)
{
  t1 = x.valor * x.cant
  total = total + t1;
}

boton.addEventListener("click", enviar)

function enviar()
{
  res.innerHTML = "";
  h2.innerHTML = "";
  dinero = parseInt(d.value);
  resta = parseInt(d.value);
  for ( var b of caja)
  {

    if (dinero > 0)
    {
      div = Math.floor (dinero / b.valor);

      if (div > b.cant)
      {
        papeles = b.cant;
      }

      else
      {
        papeles = div;
      }

      e.push (new Billete (b.valor, papeles));

      dinero = dinero - (b.valor * papeles);

    }
  }

  if (dinero > total)
  {
    res.innerHTML = "Estoy pobre :(";
  }

  else
  {
    total = total - resta;
    resta = 0;
    console.log(e);
    for (var t of e)
    {
      if (t.cant > 0)
      {
        for (var z = 1; z <= t.cant; z++)
        {
          h2.innerHTML += "";
          t.mostrar ();
        }
      }

    }
  }
  e = [];
  dinero = 0;
  div = 0;
  
}
