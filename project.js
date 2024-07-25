const width = 125;
const height = 125;
setDocDimensions(width, height);

const t = new bt.Turtle()
const eye = bt.randInRange(45,55)/10

t.jump([width / 2, height / 2])
t.arc(360, 10)
t.jump([width / 2, height / 2])
t.arc(360, 5)
t.jump([width / 2 - 5, height / 2 + 10])
t.arc(360, 2)
t.jump([width / 2 - eye, height / 2 + 11])
t.arc(360, 1)
t.jump([width / 2 + 5, height / 2 + 10])
t.arc(360, 2)
t.jump([width / 2 + eye, height / 2 + 11])
t.arc(360, 1)

t.jump([width / 2 + 1.5, height / 2 + 5])
t.arc(360, 1)
t.jump([width / 2 - 1.5, height / 2 + 5])
t.arc(360, 1)

t.jump([width / 2 - 2, height / 2 + 3])
t.setAngle(-20)
t.arc(30, 5)

t.jump([width/2 + 8, height/2 + 15.8])
t.arc(120, 3)

t.jump([width/2 + 5.5, height/2 + 18])
t.setAngle(92)
t.arc(-120, 3)


t.setAngle(-188)
t.jump([width/2 - 8, height/2 + 15.8])
t.arc(-120, 3)

t.jump([width/2 - 5.5, height/2 + 18])
t.setAngle(92)
t.arc(120, 3)


drawLines(t.lines())