const height = 125
const width = 125

setDocDimensions(width, height)

const x = [20, 40, 88, 14, 53, 82, 88, 30, 50, 60, 75]
const y = [16, 65, 88, 9, 35, 58, 88, 22, 47, 58, 50]

const curve_1 = bt.catmullRom([
  [0, 0],
  [x[0], y[0]],
  [x[1], y[1]],
  [x[2], y[2]]
])
const curve_2 = bt.catmullRom([
  [0, 0],
  [x[3], y[3]],
  [x[4], y[4]],
  [x[5], y[5]],
  [x[6], y[6]]
])
const center = bt.catmullRom([
  [0, 0],
  [x[7], y[7]],
  [x[8], y[8]],
  [x[9], y[9]],
  [x[10], x[10]]
])
const vien_1 = bt.catmullRom([
  [x[8], y[8]],
  [x[8] - 6, y[8] - bt.randInRange(5, -9)],
  [x[8] + -12, y[8] + bt.randInRange(9, 6)]
])

const vien_2 = bt.catmullRom([
  [x[8], y[8]],
  [x[8] = 6]
])

drawLines([curve_1])
drawLines([curve_2])
drawLines([center])
drawLines([vien_1])
drawLines([vien_2])