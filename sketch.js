let estado = 0;

//Variables para cargar los archivos:
let pantalla0, pantalla1, pantalla2, pantalla3, pantalla4, pantalla5, pantalla6, pantalla7,
pantalla8, fuenteBoton, fuenteCuadro, patioReal, transparentes;

function preload() 
{
  pantalla0 = loadImage("assets/patio.png"); 
  pantalla1 = loadImage("assets/mascotas.png"); 
  pantalla2 = loadImage("assets/patio-tarde.png"); 
  pantalla3 = loadImage("assets/patio-animado.gif"); 
  pantalla4 = loadImage("assets/patio-tarde-animado.gif"); 
  pantalla5 = loadImage("assets/mascotas-alegres.gif"); 
  pantalla6 = loadImage("assets/mascotas-agitadas.gif"); 
  pantalla7 = loadImage("assets/mascotas-liminal.gif"); 
  pantalla8 = loadImage("assets/mascotas-ingresando.gif");
  
  patioReal = loadImage("assets/patio-real.jpg");
  transparentes = loadImage("assets/mascotas-transparentes.png"); 

  fuenteBoton = loadFont("assets/Montserrat-Medium.ttf");
  fuenteCuadro = loadFont("assets/Montserrat-Regular.ttf");
}

function setup() 
{
  createCanvas(400, 600);
  noCursor();
}

function draw() 
{
  switch(estado) 
  {
    case 0: 
      image(pantalla0, 0, 0, width, height);
      mascotasHover();
      dibujarBoton("COMENZAR", width*0.20, height*0.66, 120, 48, 1); 
      dibujarBoton("CRÉDITOS", width*0.80, height*0.66, 120, 48, 2);
      dibujarCuadro("El patio sigue ahí.\nIgual que siempre.\nPero algo le faltaba.", 
      width/2, height*0.85, 360, 125);      
      break;

    case 1:
      image(pantalla1, 0, 0, width, height);
      patioHover();
      dibujarBoton("REALIDAD", width*0.20, height*0.66, 120, 48, 3); 
      dibujarBoton("VIRTUALIDAD", width*0.78, height*0.66, 136, 48, 4);
      dibujarCuadro("Intenté recordarlos de distintas maneras.\nAlgunas pertenecían al recuerdo.\nOtras... a la reconstrucción.", 
      width/2, height*0.85, 360, 125);
      break;

    case 2:
      image(pantalla2, 0, 0, width, height);
      mascotasHover();
      dibujarBoton("INICIO", width*0.80, height*0.66, 120, 48, 0);
      dibujarCreditos("Toda reconstrucción termina volviendo al vacío.", 
      width/2, height*0.85, 360, 125, "Laika: 26/09/2008 - 12/12/2018\nUma: 2013 - 2014 (hurtada)\nBairon: 29/08/2015 - 13/02/2026");
      break;

    case 3:
      image(pantalla3, 0, 0, width, height);
      memoriaHover();
      dibujarBoton("NOSTALGIA", width*0.20, height*0.66, 120, 48, 5);    
      dibujarBoton("CURIOSIDAD", width*0.80, height*0.66, 120, 48, 6);
      dibujarCuadro("Antes de intentar recrearlos,\nquise entender\nqué quedaba realmente de ellos.",
      width/2, height*0.85, 360, 125);
      break;

    case 4:
      image(pantalla4, 0, 0, width, height);
      virtualidadHover();
      dibujarBoton("SIMULACRO", width*0.20, height*0.66, 120, 48, 7);  
      dibujarBoton("REVIVALISMO", width*0.78, height*0.66, 136, 48, 8);
      dibujarCuadro("La tecnología no podía devolverlos.\nPero quizá podía\n simular su presencia.", 
      width/2, height*0.85, 360, 125);
      break;

    case 5:
      image(pantalla5, 0, 0, width, height);
      grisHover();
      dibujarBoton("FIN", width*0.80, height*0.66, 120, 48, 0);
      dibujarCuadro("Con el tiempo,\nlos recuerdos dejan de ser exactos.\nPero a veces se vuelven más cálidos.", 
      width/2, height*0.85, 360, 125);
      break;

    case 6:
      image(pantalla6, 0, 0, width, height);
      aberracionHover();
      dibujarBoton("FIN", width*0.80, height*0.66, 120, 48, 0);
      dibujarCuadro("Me pregunté cuánto podía alterarse\nun recuerdo\nantes de dejar de parecer real.", 
      width/2, height*0.85, 360, 125);
      break;

    case 7:
      image(pantalla7, 0, 0, width, height);
      umbralHover();
      dibujarBoton("FIN", width*0.80, height*0.66, 120, 48, 0);
      dibujarCuadro("El entorno seguía respirando.\nEllos no.", 
      width/2, height*0.85, 360, 125);
      break;

    case 8:
      image(pantalla8, 0, 0, width, height);
      revivalismoHover();
      dibujarBoton("FIN", width*0.80, height*0.66, 120, 48, 0);
      dibujarCuadro("Por un instante,\nparecía que habían regresado.\nPero el movimiento no los representaba.", 
      width/2, height*0.85, 360, 125);
      break;
  }

  dibujaPuntero();
}

function mousePressed()
{
  switch(estado) 
  {
    case 0:
      chequearClick(width*0.20, height*0.66, 120, 48, 1);
      chequearClick(width*0.80, height*0.66, 120, 48, 2);
      break;

    case 1:
      chequearClick(width*0.20, height*0.66, 120, 48, 3);
      chequearClick(width*0.78, height*0.66, 120, 48, 4);
      break;

    case 2:
      chequearClick(width*0.80, height*0.66, 120, 48, 0); 
      break;

    case 3:
      chequearClick(width*0.20, height*0.66, 120, 48, 5);
      chequearClick(width*0.78, height*0.66, 120, 48, 6);
      break;

    case 4:
      chequearClick(width*0.20, height*0.66, 120, 48, 7);
      chequearClick(width*0.78, height*0.66, 120, 48, 8);
      break;

    case 5:
      chequearClick(width*0.80, height*0.66, 120, 48, 2);
      break;

    case 6:
      chequearClick(width*0.80, height*0.66, 120, 48, 2);
      break;

    case 7:
      chequearClick(width*0.80, height*0.66, 120, 48, 2);
      break;

    case 8:
      chequearClick(width*0.80, height*0.66, 120, 48, 2);
      break;
  }
}

//Funciones auxiliares

function dibujarBoton(txt_, x_, y_, ancho_, alto_) 
{
  //dibuja un botón rectangular centrado en x_, y_

  push();
  translate(x_, y_);

  if(mouseOverRect(x_, y_, ancho_, alto_)) 
  {
    scale(1.03);
  }

  fill(190, 185, 180);
  stroke(255, 255, 255, 40);
  strokeWeight(1);
  rectMode(CENTER);
  rect(0, 0, ancho_, alto_, 6);
  textFont(fuenteBoton);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(16);
  text(txt_, 0, 1);
  pop();
}

function mouseOverRect(x_centro_, y_centro_, ancho_, alto_) 
{
  //devuelve true si coincide la coordenada del mouse con zona rect

  return (mouseX > x_centro_-ancho_/2 && mouseX < x_centro_+ancho_/2 &&
  mouseY > y_centro_-alto_/2 && mouseY < y_centro_+alto_/2);
}

function dibujarCuadro(txt_, x_, y_, ancho_, alto_)  
{
  //dibuja un cuadro de texto con esquinas redondeadas de 6 px

  push();
  translate(x_, y_);
  fill(215, 210, 205, 230);
  stroke(255, 255, 255, 40);
  strokeWeight(1);
  rectMode(CENTER);
  rect(0, 0, ancho_, alto_, 6);

  textFont(fuenteCuadro);
  textAlign(CENTER, CENTER);
  fill(20);
  textSize(15);
  textLeading(28);
  text(txt_, 0, 0);
  pop();
}

function dibujarCreditos(frase_, x_, y_, ancho_, alto_, fechas_) 
{
  //dibuja el cuadro de créditos con frase y fechas separadas

  push();
  translate(x_, y_);
  fill(215, 210, 205, 230);
  stroke(255, 255, 255, 40);
  strokeWeight(1);
  rectMode(CENTER);
  rect(0, 0, ancho_, alto_, 6);

  textFont(fuenteCuadro);
  textAlign(CENTER, CENTER);
  fill(20);

  textSize(14);
  textLeading(26);
  text(frase_, 0, -33, ancho_-20);

  textSize(14);
  textLeading(19);
  text(fechas_, 0, 15, ancho_-20);
  pop();
}

function dibujaPuntero() 
{
  //dibuja el puntero personalizado

  push();
  fill(255, 255, 255, 180);
  stroke(255, 255, 255, 40);
  strokeWeight(1);
  ellipse(mouseX, mouseY, 10, 10);
  pop();
}

function chequearClick(x_, y_, ancho_, alto_, estadoDestino_)
{
  //Verifica si el click cayó sobre un botón y cambia el estado

  if(mouseOverRect(x_, y_, ancho_, alto_)) 
  {
    estado = estadoDestino_;
  }
}

function patioHover()
{
  //aparición simple del patio real al hacer hover sobre el cuadro de texto

  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    fill(255);
    image(patioReal, 0, 0, width, height);
    pop();
  }
}

function aberracionHover()
{
  //aberración cromática al hacer hover sobre el cuadro de texto
  
  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    image(pantalla6, 0, 0, width, height);
    filter(POSTERIZE, 3);
    pop();
  }
}

function grisHover()
{
  //aparición en escala de grises al hacer hover sobre el cuadro de texto

  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    image(pantalla5, 0, 0, width, height);
    filter(GRAY);
    pop();
  }
}

function revivalismoHover()
{
  //sobreexposición al hacer hover sobre el cuadro de texto

  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    image(pantalla8, 0, 0, width, height);
    filter(DILATE);
    pop();
  }
}

function virtualidadHover()
{
  //inversión negativa de la imagen al hacer hover sobre el cuadro de texto

  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    image(pantalla4, 0, 0, width, height);
    filter(INVERT);
    pop();
  }
}

function memoriaHover()
{
  //difuminación total de la imagen al hacer hover sobre el cuadro de texto*/

  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    image(pantalla3, 0, 0, width, height);
    filter(BLUR, 3);
    pop();
  }
}

function umbralHover()
{
  /*efecto de umbral en blanco y negro sobre al gif haciendo hover sobre el cuadro de texto*/

  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    image(pantalla7, 0, 0, width, height);
    filter(THRESHOLD, 0.5);
    pop();
  }
}

function mascotasHover()
{
  //aparición translúcida de las mascotas al hacer hover sobre el cuadro de texto

  if(mouseOverRect(width/2, height*0.85, 360, 125))
  {
    push();
    tint(255, 120);
    image(transparentes, 0, 0, width, height);
    pop();
  }
}