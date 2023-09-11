import p5 from 'p5';

export default (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(255);
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(200);
    p.noStroke();
    p.fill(0);
    p.rect(100, 100, 200);
  };
};
