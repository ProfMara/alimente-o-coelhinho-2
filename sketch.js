const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var fruta, corda;
var con_fruta;

var cenario;
var frutaIMG;
var coelhoIMG;
var coelho;
var botao;

function preload() {
   
}

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;

    solo = new Ground(200, 700, 600, 20);
    corda = new Rope(7, { x: 245, y: 30 });
    fruta = Bodies.rectangle(300, 300, 60,40);

    Composite.add(corda.body, fruta);

    con = new Link(corda, fruta);
    
   

    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50);


    


}

function draw() {
    background("cyan");
    corda.show();
    fill("red");    
    ellipse( fruta.position.x, fruta.position.y, 60);
    solo.show();
    Engine.update(engine);

}